import { Octokit } from "@octokit/rest";

const saveToGitHub = async (html, css, js) => {
  // Prompt the user for GitHub details
  const username = prompt("Enter your GitHub username:");
  const repo = prompt("Enter the name of your repository:");
  const token = prompt("Enter your GitHub personal access token:");

  if (!username || !repo || !token) {
    alert("All fields are required to push files to GitHub.");
    return;
  }

  const content = `
    <!DOCTYPE html>
    <html>
      <head><style>${css}</style></head>
      <body>${html}<script>${js}</script></body>
    </html>
  `;

  try {
    const octokit = new Octokit({ auth: token });

    // Check if the repository exists
    await octokit.repos.get({
      owner: username,
      repo: repo,
    });

    // Push the file to the repository
    await octokit.repos.createOrUpdateFileContents({
      owner: username,
      repo: repo,
      path: "index.html",
      message: "Code from Online Code Editor",
      content: btoa(content), // Encode content to base64
    });

    alert("Files saved to GitHub successfully!");
  } catch (error) {
    console.error(error);
    if (error.status === 404) {
      alert("Repository not found. Please check the details and try again.");
    } else if (error.status === 401) {
      alert("Authentication failed. Please check your token and try again.");
    } else {
      alert("An error occurred while saving to GitHub.");
    }
  }
};

export default saveToGitHub;