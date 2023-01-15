const { head } = require("../routes/ProfileRouter");

exports.getRepoInfo = async function (req, res, next) {
  const { id } = req.params;

  fetch(`https://api.github.com/users/${id}/repos`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client Error: ${response.status}`);
      } else if (response.status >= 500) {
        throw new Error(`Server Error: ${response.status}`);
      }
    })
    .then((data) => {
      // send data

      let repoData = [];
      data.forEach((repo) => {
        repoData.push({
          id: repo.id,
          repo_name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          updated_at: repo.updated_at,
        });
      });
      res.status(200).json({
        status: "success",
        repoData: repoData,
      });
    })
    .catch((error) => {
      //error handling
      res.status(404).json({
        status: "fail",
        message: error.message,
      });
      // res.error(error.message);
    });
};
