exports.getUserInfo = async function (req, res, next) {
  const { id } = req.params;

  fetch(`https://api.github.com/users/${id}`, {
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
      console.log(data);
      res.status(200).json({
        status: "success",
        userData: {
          name: data.name,
          bio: data.bio,
          avatar: data.avatar_url,
          location: data.location,
          twitter: data.twitter_username,
          company: data.company,
          blog: data.blog,
          url: data.html_url,
          email: data.email,
        },
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
