//
// npm run new:api
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
      {
        type: "confirm",
        name: "have_mock",
        message: "Need mock?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { api_name, dir } = answers;
      const path = `api/${dir ? `${dir}/` : ``}${api_name}`;
      const abs_path = `src/pages/${path}`;
      const mock_path = `mocks/msw/api/next/${dir ? `${dir}/` : ``}`;
      return {
        ...answers,
        path,
        abs_path,
        mock_path,
      };
    });
  },
};
