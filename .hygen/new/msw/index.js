//
// npm run new:msw
//
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "input",
        name: "api_name",
        message: "What is the name of api?",
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory? (No problem in blank)",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { api_name, dir } = answers;
      const path = `api/${dir ? `${dir}/` : ``}${api_name}`;
      const mock_path = `mocks/msw/api/${dir ? `${dir}/` : ``}`;
      return {
        ...answers,
        path,
        mock_path,
      };
    });
  },
};
