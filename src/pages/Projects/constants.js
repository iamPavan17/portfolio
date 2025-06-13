const PROJECTS_ROUTE = "/projects";

const offlineProjectData = [
  {
    id: 1,
    logo: "https://i.ibb.co/qYkzjRQ/theme-editor.png",
    title: "Theme Editor",
    body: `
      <ul class="project-list">
        <li>An extension for the VSCode IDE, allows you to seamlessly adjust and fine-tune your theme settings while witnessing real-time changes with live preview.</li>
        <li>The extension boasts over <b>7,500+</b> installations in the marketplace.</li>
        <li>Tech used - TypeScript, Svelte.</li>
      </ul>
    `,
    url: "https://marketplace.visualstudio.com/items?itemName=imPavan.theme-editor",
  },
  {
    id: 2,
    logo: "",
    title: "Gitrain",
    body: `
      <ul class="project-list">
        <li>A CLI tool for emoji-powered commits and automated GitHub pull request creation, with built-in support for including AB#123 (Azure Boards) or JIRA-123 references in PR titles.</li>
        <li>It simplifies the process of creating pull requests with emojis and references, enhancing your Git workflow.</li>  
      </ul>
    `,
    url: "https://www.npmjs.com/package/gitrain",
  },
  {
    id: 3,
    logo: "https://i.ibb.co/XtbmDHQ/homebrew.png",
    title: "Home Brew Coffees",
    body: `
      <ul class="project-list">
        <li>An e-commerce platform for purchasing a rich variety of premium Coffee products.</li>
        <li>Independently developed from both user and admin perspectives, with seamless integration of the secure <b>RazorPay</b> payment gateway.</li>
        <li>Tech used - React, Firebase, Firebase Cloud functions.</li>
      </ul>
    `,
    url: "https://homebrewcoffees.com/",
  },
  {
    id: 4,
    logo: "https://i.ibb.co/59bGQrK/portfolio.png",
    title: "Portfolio Website",
    body: "My personal portfolio website.",
    url: "https://iampa.netlify.app/",
  },
];

export { PROJECTS_ROUTE, offlineProjectData };
