exports.getLangInfo = async function (req, res, next) {
  const { id, topic } = req.params;

  fetch(`https://api.github.com/repos/${id}/${topic}/languages`, {
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

      let langData = [];
      Object.keys(data).forEach((lang) => {
        langData.push(lang);
      });
      res.status(200).json({
        status: "success",
        langData: langData,
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
