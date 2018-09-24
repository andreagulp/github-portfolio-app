import { createSelector } from "reselect";

const getIssues = state => state.issues;
const getProjectId = state => state.projectId;

const extractText = (textBody, start, end) => {
  return textBody.substring(
    textBody.lastIndexOf(start) + start.length + 2,
    textBody.lastIndexOf(end) - 3
  );
};

export const getProjects = createSelector([getIssues], issues => {
  let projects = [];
  issues.map(issue => {
    projects = [
      ...projects,
      {
        id: issue.id,
        repository_url: issue.repository_url,
        state: issue.state,
        title: issue.title,
        description: extractText(
          issue.body,
          "**Project definition:**",
          "**Project goal:**"
        ),
        labels: issue.labels.map(label => {
          const lbs = {
            name: label.name,
            color: label.color,
            id: label.id
          };
          return lbs;
        }),
        goal: extractText(
          issue.body,
          "**Project goal:**",
          "**Savings forecasted (expressed in HC’s):**"
        ),
        savings: extractText(
          issue.body,
          "**Savings forecasted (expressed in HC’s):**",
          "**Other Benefits**"
        ),
        benefits: extractText(
          issue.body,
          "**Other Benefits**",
          "**Current sprint:**"
        ),
        currentSprint: extractText(
          issue.body,
          "**Current sprint:**",
          "**Next step:**"
        ),
        nextStep: extractText(issue.body, "**Next step:**", "**Due date:**"),
        dueDate: extractText(issue.body, "**Due date:**", ""),
        assignee: issue.assignee
          ? { name: issue.assignee.login, avatar: issue.assignee.avatar_url }
          : "none"
      }
    ];
    return projects;
  });
  return projects;
});

// export const getSingleProjects = createSelector(
//   [getProjects, getProjectId],
//   (projects, projectId) => {
//     return projects.filter(project => project.id === projectId);
//   }
// );
