const changeCase = require("change-case");

//
// npm run new:hook
//
const nameValidator = (input) => {
  if (input.startsWith("use")) {
    return true;
  }
};

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      // use test => useTest
      {
        type: "input",
        name: "hook_name",
        message: "What is the name of hook?",
        validate: nameValidator,
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory? (No problem in blank)",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { hook_name, dir } = answers;
      const dirName = changeCase.camelCase(hook_name);
      const path = `${dir ? `${dir}/` : ``}${dirName}`;
      const abs_path = `src/hooks/${path}`;
      return { ...answers, path, abs_path };
    });
  },
};
