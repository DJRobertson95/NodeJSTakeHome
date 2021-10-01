# Introduction

Hello 👋,

Thanks for taking the time to complete this brief take-home assignment . Please timebox your effort to a maximum of 3 hours.

The goal of this exercise is to evaluate your backend skills (Node.js, ExpressJS, 3rd-party integration, and testing). Feel free to make any assumptions, simplifications, or other changes to the problems - though please state those in your write up when you submit this assignment. Please use as many libraries as is reasonable - there is no sense in rebuilding what has been built.

Using and Express.js you will create a REST endpoint to retrieve a list Bitcoin mining pools that give the best rewards per coin. Your consumers need to know the available coins and then search by the available coin to get the top 10 mining pools with the best rewards for a given coin.

Before getting started, please read this document carefully.

**Good luck 🙃**

# Acceptance Criteria

- API must allow two things: 1. Allow users to pull back all coins available as demonimation for reward, and 2. Allow users to search for mining pools with best rewards for a given coin
- All crypto ExpressJS endpoints must be behind HTTP Bearer Authentication. Use the following credentials, hardcoding them on the backend: `user@rackspace.com`/`f2b0156f-cf95-4e29-9f57-51296a481c6a`
- Use `jest` for unit tests to cover endpoints, aggregation logic, etc.
- Document design decisions

# What counts?

- All functional requirements must be satisfied
- Production-like code that must be well coded, clean, and commented
- Tests must be passing and meaningful
- General Node.js knowledge

# Submission

Once you're satisfied with what you've built. Invite *github-user* to your provide repo and email your recruiter to inform the dev team.

# Getting started

With latest Node LTS installed, run the following commands:

## What will you find inside this boilerplate

In this boilerplate, you will find:
- The main entry file: `index.js`
- A `README.md` file to document your comments and design decisions
- Inside the `package.json`, we added the following packages:
    - `express`
    - `jest`

# Minerstats API

https://api.minerstat.com/docs-coins

Minerstats is a free API that allows you to search for information on crypto mining pools. The API provides basic information for pools listed on minerstat. The API is open to the public and has no authentication requirements. See documentation for more information.
