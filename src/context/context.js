import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext(); // 1 step

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider vlue={"hello"}>{children}</GithubContext.Provider>
  );
}; // 2 step

export { GithubContext, GithubProvider }; // 3 step
