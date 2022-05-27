const inquirer = require("inquirer");

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's NAME?",
      validate: (managerNameInput) => {
        if (managerNameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's NAME.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's employee ID?",
      validate: (managerIdInput) => {
        if (managerIdInput) {
          return true;
        } else {
          console.log("Please enter the team manager's ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's EMAIL address?",
      validate: (managerEmailInput) => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("Please enter the team manager's EMAIL address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerPhone",
      message: "What is the team manager's office PHONE number?",
      validate: (managerPhoneInput) => {
        if (managerPhoneInput) {
          return true;
        } else {
          console.log("Please enter the team manager's office PHONE number.");
        }
      },
    },
  ]);
};

const promptStaff = (teamData) => {
  console.log(`
  ============================
  Add your staff's information
  ============================`);

  // if there is not a staff array, create one
  if (!teamData.staff) {
    teamData.staff = [];
  }

  return inquirer
    .prompt([
      {
        type: "list",
        name: "addStaff",
        message: "Would you like to add an ENGINEER, INTERN, or FINISH?",
        choices: ["Engineer", "Intern", "Finish"],
      },
      {
        type: "input",
        name: "staffName",
        message: "What is your staff member's NAME?",
        validate: (staffName) => {
          if (staffName) {
            return true;
          } else {
            console.log("Please enter in the staff member's NAME.");
            return false;
          }
        },
        when: ({ addStaff }) => {
          if (addStaff !== "Finish") {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((staffData) => {
      teamData.staff.push(staffData);
      if (teamData.staff[teamData.staff.length - 1].addStaff !== "Finish") {
        return promptStaff(teamData);
      } else {
        return teamData;
      }
    });
};

promptManager()
  .then(promptStaff)
  .then((answers) => console.log(answers))
  .catch((err) => {
    console.log(err);
  });
