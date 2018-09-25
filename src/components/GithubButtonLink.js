import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

class GithubButtonLink extends Component {
  render() {
    const { url } = this.props;
    return (
      <Tooltip title="See on Github" placement="top">
        <IconButton aria-label="Github Link">
          <a href={url} target="_blank">
            <i className="fab fa-github" />
          </a>
        </IconButton>
      </Tooltip>
    );
  }
}

export default GithubButtonLink;
