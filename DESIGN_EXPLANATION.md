# Overview of project

# Design Decisions and Thoughts

1. Set up Infrastructure
   Axios
2. Read documentation
3. Authentication
4. Endpoints
5. Test
   Currently testing using jest

---

To Do

- Need to Set up Minerstats API Endpoint
- Create API Endpoint that reutnrs the mining pool list
- Create API Endpoint that allows searching for mining pools by coin

---

Mistakes Made

- Forgot to split the Auth to get the auth type:token
- Having constant problems with authentication on index.js
  coming back

---

Explanation

- Installed the Dependencies
  express, jsonwebtoken, & supertest
- Created .env to store out ACCESS_TOKEN_SECRET
  -Added a middlware fn (authenticateToken) to check for a valid JWT in the request header.
  if valid, the fn adds the user info to the req object
- Also added a fn to GET /mining-pools
- wrote test using supertest to ensure the server IS functioning
