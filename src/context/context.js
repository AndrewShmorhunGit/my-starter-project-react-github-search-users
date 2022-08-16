import React, { useState, useEffect, lazy } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const repoUrl = "https://api.github.com/users/john-smilga/repos?per_page=100";

const followersUrl = "https://api.github.com/users/john-smilga/followers";

const GithubContext = React.createContext(); // 1 step

// bradtraverst, wesbos, sdras, cassidoo, jlengstorf, john-smilga, courthead, marcysutton, KyleAMathews

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // request loading
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const checkRequesrs = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you have exceeded you hourly rate limit!");
        }
      })
      .catch((error) => console.log(error));
  };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  // Opps! Someting went wrong 😕

  const searchGitHubUser = async (user) => {
    toggleError();
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((error) =>
      console.log(error)
    );

    if (response) {
      console.log(response);
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      const reposResp = await axios(
        `${rootUrl}/users/${login}/repos?per_page=100`
      ).then((response) => setRepos(response.data));
      const followersResp = await axios(`${followers_url}?per_page=100`).then(
        (response) => setFollowers(response.data)
      );
      // await Promise.allSettled([]);
    } else {
      toggleError(true, "There is no such user with that name");
    }
    checkRequesrs();
    setLoading(false);
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
        error,
        loading,
        // setError,
        searchGitHubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}; // 2 step

export { GithubContext, GithubProvider }; // 3 step
