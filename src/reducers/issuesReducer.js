import { FETCH_ISSUES, GET_SINGLE_PROJECT } from "../actions/types";

const initialState = [];

const extractText = (textBody, start, end) => {
  return textBody.substring(
    textBody.lastIndexOf(start) + start.length + 2,
    textBody.lastIndexOf(end) - 3
  );
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ISSUES:
      return [].concat.apply([], action.payload).map(issue => {
        let projects = [];
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
            nextStep: extractText(
              issue.body,
              "**Next step:**",
              "**Due date:**"
            ),
            dueDate: extractText(issue.body, "**Due date:**", ""),
            assignee: issue.assignee
              ? {
                  name: issue.assignee.login,
                  avatar: issue.assignee.avatar_url
                }
              : "none"
          }
        ];
        projects = [].concat.apply([], projects);
        return projects;
      });
    case GET_SINGLE_PROJECT:
      return state.filter(project => project.id === action.payload);
    default:
      return state;
  }
}
