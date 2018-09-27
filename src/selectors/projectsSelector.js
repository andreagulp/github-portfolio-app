import { createSelector } from "reselect";
import _ from "lodash";
import { getSquadAvatar } from "../utils";
import { REPOS } from "../data/repos";

const getIssues = state => state.issues;
const getProjectId = state => state.projectId;
const getKeyword = state => state.keyword;
const getSortValue = state => state.sortValue;
const getIsClosed = state => state.filters.isClosed;
const getIsTop = state => state.filters.isTop;
const getSelectedLabels = state => state.filters.labels;
const getSelectedSquads = state => state.filters.squads;

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
        squad: getSquadAvatar(issue.repository_url, REPOS).squad,
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

export const getSortedProjects = createSelector(
  [getVisibleProjects, getSortValue],
  (visibleProjects, sortValue) => {
    return !sortValue.direction
      ? _.orderBy(visibleProjects, sortValue.field, ["asc"])
      : _.orderBy(visibleProjects, sortValue.field, ["desc"]);
  }
);

export const getClosedProjects = createSelector(
  [getSortedProjects, getIsClosed],
  (sortedProjects, isClosed) => {
    if (isClosed) {
      return sortedProjects.filter(project => project.state === "closed");
    } else {
      return sortedProjects.filter(project => project.state === "open");
    }
  }
);

export const getTopProjects = createSelector(
  [getClosedProjects, getIsTop],
  (closedProjects, isTop) => {
    if (isTop) {
      return closedProjects.filter(project => project.topProject === true);
    } else {
      return closedProjects;
    }
  }
);

export const getLabels = createSelector([getTopProjects], topProjects => {
  let labels = [];
  topProjects.map(project =>
    project.labels.map(label => {
      return (labels = _.union([...labels, label.name]));
    })
  );
  return labels.sort();
});

export const getLabelFilterProjects = createSelector(
  [getTopProjects, getSelectedLabels],
  (topProjects, selectedLabels) => {
    let labelFilterProjects = selectedLabels.map(label => {
      return selectedLabels.length > 0
        ? _.filter(topProjects, { labels: [{ name: label }] })
        : topProjects;
    });
    if (selectedLabels.length > 0) {
      labelFilterProjects = [].concat.apply([], labelFilterProjects);
      return _.union(labelFilterProjects);
    } else {
      return topProjects;
    }
  }
);

export const getSquadLabels = createSelector(
  [getLabelFilterProjects],
  labelFilterProjects => {
    let squadLabels = [];
    labelFilterProjects.map(project => {
      return (squadLabels = _.union([...squadLabels, project.squad]));
    });
    return squadLabels.sort();
  }
);

export const getSquadFilterProjects = createSelector(
  [getLabelFilterProjects, getSelectedSquads],
  (labelFilterProjects, selectedSquads) => {
    let squadFilterProjects = selectedSquads.map(label => {
      return selectedSquads.length > 0
        ? _.filter(labelFilterProjects, { squad: label })
        : labelFilterProjects;
    });
    if (selectedSquads.length > 0) {
      squadFilterProjects = [].concat.apply([], squadFilterProjects);
      return _.union(squadFilterProjects);
    } else {
      return labelFilterProjects;
    }
  }
);
