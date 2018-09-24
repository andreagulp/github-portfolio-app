import axios from "axios";
import { FETCH_ISSUES, GET_PROJECT_ID, GET_SINGLE_PROJECT } from "./types";
import { REPOS } from "../data/repos";

const gitToken = process.env.REACT_APP_GIT_ACCESS_TOKEN;
const baseGitUrl = "https://github.ibm.com/api/v3/search/issues?q=";
const gitSeachKeyword = "%20label:enhancement";

const gitFullUrl = (gitOrgUrl, gitRepoUrl) =>
  `${baseGitUrl}${gitSeachKeyword}%20repo:${gitOrgUrl}/${gitRepoUrl}&access_token=${gitToken}`;

const repos = REPOS;

export const fetchIssues = () => {
  let request = Promise.all(
    repos.map(x =>
      axios.get(gitFullUrl(x.org, x.repo)).then(res => res.data.items)
    )
  );

  return {
    type: FETCH_ISSUES,
    payload: request
  };
};

export const getProjectId = projectId => {
  return {
    type: GET_PROJECT_ID,
    payload: projectId
  };
};

export const getSingleProject = projectId => {
  return {
    type: GET_SINGLE_PROJECT,
    payload: projectId
  };
};
