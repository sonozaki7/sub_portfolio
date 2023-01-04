const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL =
  "https://github.com/sonozaki7/sonozaki7.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "portfolio",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
