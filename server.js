// Assuming you have set up an Express server
const express = require("express");
const app = express();

// Register endpoint
app.post("/register", (req, res) => {
  const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

  // Make the registration API call to John Doe Railways
  makeRegistrationAPICall({
    companyName,
    ownerName,
    rollNo,
    ownerEmail,
    accessCode,
  })
    .then((response) => {
      // Extract the authentication token from the response
      const authToken = response.data.authToken;

      // Return the authentication token as the API response
      res.json({ authToken });
    })
    .catch((error) => {
      // Handle any errors and return an error response
      console.error("Registration failed:", error.message);
      res.status(500).json({ error: "Registration failed" });
    });
});

// Helper function to make the registration API call
function makeRegistrationAPICall(registrationData) {
  // Use your preferred HTTP library to make the POST request to John Doe Railways registration endpoint
  // Example using Axios:
  const axios = require("axios");

  const registrationEndpoint = "http://104.211.219.98/train/register";

  return axios.post(registrationEndpoint, registrationData);
}

// Start the server
app.listen(8000, () => {
  console.log("API server running on port 8000");
});
