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
      message: "What is the team manager's employee ID number?",
      validate: (managerIdInput) => {
        if (managerIdInput) {
          return true;
        } else {
          console.log("Please enter the team manager's ID number.");
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
        name: "staffType",
        message: "Would you like to add an ENGINEER, INTERN, or FINISH?",
        choices: ["Engineer", "Intern", "Finish"],
      },
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's NAME?",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter in the engineer's NAME.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID number?",
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("Please enter in the engineer's ID number.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's EMAIL address?",
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("Please enter in the engineer's EMAIL address.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GITHUB username?",
        validate: (engineerGithubInput) => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log("Please enter in the engineer's GITHUB username.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internName",
        message: "What is the intern's NAME?",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter in the intern's NAME.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID number?",
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("Please enter in the intern's ID number.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's EMAIL address?",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter in the intern's EMAIL address.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the name of the intern's SCHOOL?",
        validate: (internSchoolInput) => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log("Please enter in the name of the intern's SCHOOL.");
            return false;
          }
        },
        when: ({ staffType }) => {
          if (staffType == "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((staffData) => {
      teamData.staff.push(staffData);

      // if the last entry in staff[] has an staffType value of 'Finish', end loop
      if (teamData.staff[teamData.staff.length - 1].staffType !== "Finish") {
        return promptStaff(teamData);
      } else {
        // get rid of last 'Finish' value in array and then return array
        teamData.staff.pop();
        return teamData;
      }
    });
};

module.exports = {
  promptManager,
  promptStaff,
};
