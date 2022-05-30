const { promptManager, promptStaff } = require("./lib/app");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./src/write-copy");

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

promptManager()
  .then(promptStaff)
  .then((answers) => generatePage(answers))
  .then((pageHTML) => writeFile(pageHTML))
  .then((writeFileResponse) => console.log(writeFileResponse.message))
  .catch((err) => {
    console.log(err);
  });
