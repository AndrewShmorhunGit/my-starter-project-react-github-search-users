import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext(); // 1 step

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // request loading
  const [requests, setRequests] = useState(0);
  const [laoding, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const checkRequesrs = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          // setError(true);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(checkRequesrs, []);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        // setFollowers,
        // setGithubUser,
        // setRepos,
        requests,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}; // 2 step

export { GithubContext, GithubProvider }; // 3 step
