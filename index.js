const { promptManager, promptStaff } = require("./lib/app");

promptManager()
  .then(promptStaff)
  .then((answers) => console.log(answers))
  .catch((err) => {
    console.log(err);
  });
