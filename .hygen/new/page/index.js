//
// npm run new:page -- --tag=p
//
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "select",
        name: "page_generation",
        message: "Which page generation?",
        choices: ["SG", "SSR", "ISR"],
      },
      {
        type: "input",
        name: "page_name",
        message: "What is the name of page?",
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory? (No problem in blank)",
      },
      {
        type: "input",
        name: "slug",
        message: "Type a slug when it uses dynamic route (Blank to skip)",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "Does it have props?",
      },
      {
        type: "confirm",
        name: "have_hooks",
        message: "Is it have hooks?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { page_name, dir, have_props, slug, page_generation } = answers;
      const is_SG = page_generation === "SG" || "ISR";
      const is_SSR = page_generation === "SSR";
      const is_ISR = page_generation === "ISR";
      const is_dynamic = slug.length > 0;
      const path = `${dir ? `${dir}/` : ``}${page_name}`;
      const TGetStaticPaths = is_dynamic ? " GetStaticPaths," : "";
      const abs_path = `src/pages/${path}`;
      const file_name = is_dynamic ? `[${slug}]` : "index";
      const type_annotate = have_props ? `NextPage<Props>` : "NextPage";
      const tag = args.tag ? args.tag : "div";
      return {
        ...answers,
        path,
        abs_path,
        type_annotate,
        tag,
        is_ISR,
        is_SG,
        is_SSR,
        is_dynamic,
        TGetStaticPaths,
        file_name,
      };
    });
  },
};
