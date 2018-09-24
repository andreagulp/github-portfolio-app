export const getSquadAvatar = (repository_url, REPOS) => {
  const orgName = repository_url.substring(
    repository_url.lastIndexOf("repos/") + 6,
    repository_url.lastIndexOf("/")
  );

  const repoName = repository_url.substring(
    repository_url.lastIndexOf(`${orgName}/`) + orgName.length + 1
  );

  return REPOS.find(x => {
    return x.repo === repoName;
  });
};
