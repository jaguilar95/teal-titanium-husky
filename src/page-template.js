const generateManager = (name, id, email, phone) => {
  return `<div class="col-3">
          <div class="card" style="width: 18rem">
            <div class="card-header">
              <h2>${name}</h2>
              <div class="lead">
                <i class="bi bi-person-badge-fill"></i> Manager
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${id}</li>
              <li class="list-group-item">
                Email:
                <a href="mailto:${email}" class="link-primary"
                  >:${email}</a
                >
              </li>
              <li class="list-group-item">Phone: ${phone}</li>
            </ul>
          </div>
        </div>`;
};

// const generateStaff = (staffArr) {

// }

const generatePage = (templateData) => {
  const { managerName, managerId, managerEmail, managerPhone, ...staffData } =
    templateData;

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
    />
    <title>Team Info</title>
  </head>
  <body>
    <!-- ribbon -->
    <nav class="navbar navbar-expand-lg bg-primary">
      <h1 class="display-1 text-light">My Team</h1>
    </nav>

    <!-- main container -->
    <div class="container mt-5">
      <div class="row justify-content-center">
        <!-- Manager Mock -->
        ${generateManager(managerName, managerId, managerEmail, managerPhone)}
        </div>
        </div>
        
    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
    crossorigin="anonymous"
    ></script>
    </body>
    </html>
    `;
  // ${generateStaff(staffData)}
};

const dummy = {
  managerName: "Josue",
  managerId: "1",
  managerEmail: "1@email.com",
  managerPhone: "111 111 1111",
  staff: [
    {
      staffType: "Engineer",
      engineerName: "Carlos",
      engineerId: "2",
      engineerEmail: "2@email.com",
      engineerGithub: "carlos2",
    },
    {
      staffType: "Intern",
      internName: "Trevor",
      internId: "3",
      internEmail: "3@email.com",
      internSchool: "3school",
    },
  ],
};

const dummyPage = generatePage(dummy);

console.log(dummyPage);
