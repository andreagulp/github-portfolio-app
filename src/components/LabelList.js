import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class LabelList extends Component {
  render() {
    const { labels, classes } = this.props;
    return (
      <div className={classes.root}>
        {labels.map(label => {
          return (
            <Chip
              className={classes.chip}
              label={label.name}
              variant="outlined"
              key={label.id}
            />
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(LabelList);
