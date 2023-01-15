exports.userCheck = async function validUserCheck(req, res, next) {
  // Get the user ID from the request parameters
  const userId = req.params.id;

  // Fetch data from the GitHub API
  try {
    let data = await fetch(`https://api.github.com/users/${userId}`);
    let userData = await data.json();

    // Check if the user ID exists in the API
    if (userData.message !== "Not Found") {
      // If the user is valid, call the next middleware function
      next();
    } else {
      // If the user is not valid, return a 401 status code
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    // Handle any errors that occur while fetching data
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
