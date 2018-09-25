import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import StarRate from "@material-ui/icons/StarRate";
import Badge from "@material-ui/core/Badge";
import AttachMoney from "@material-ui/icons/AttachMoney";
import CardActions from "@material-ui/core/CardActions";

class ProjectIconsIndicator extends Component {
  render() {
    const { savings, topProject } = this.props;
    return (
      <CardActions disableActionSpacing>
        {topProject ? (
          <Tooltip title="Top Project" placement="top">
            <StarRate style={{ fontSize: 35 }} color="secondary" />
          </Tooltip>
        ) : (
          <div />
        )}

        <Tooltip title="Savings" placement="top">
          <Badge badgeContent={savings} color="primary">
            <AttachMoney style={{ fontSize: 30, color: "#FFAB00" }} />
          </Badge>
        </Tooltip>
      </CardActions>
    );
  }
}

export default ProjectIconsIndicator;
