import { createSelector } from "reselect";
import _ from "lodash";

const getIssues = state => state.issues;
const getProjectId = state => state.projectId;
const getKeyword = state => state.keyword;
const getSortValue = state => state.sortValue;

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
        id: issue.id.toString(),
        topProject: issue.labels.find(label => label.name === "TOP")
          ? true
          : false,
        repository_url: issue.repository_url,
        issue_url: issue.html_url,
        state: issue.state,
        title: issue.title,
        titleSort: issue.title.toLowerCase(),
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

export const getSingleProject = createSelector(
  [getProjects, getProjectId],
  (projects, projectId) => projects.filter(project => project.id === projectId)
);

export const getVisibleProjects = createSelector(
  [getProjects, getKeyword],
  (projects, keyword) => {
    if (keyword && keyword.length > 0) {
      return projects.filter(project =>
        project.title.toUpperCase().includes(keyword.toUpperCase())
      );
    } else {
      return projects;
    }
  }
);

export const getSortedProject = createSelector(
  [getVisibleProjects, getSortValue],
  (visibleProjects, sortValue) => {
    return !sortValue.direction
      ? _.orderBy(visibleProjects, sortValue.field, ["asc"])
      : _.orderBy(visibleProjects, sortValue.field, ["desc"]);
  }
);
