import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    marginTop: 5
  }
});

class SprintCard extends Component {
  render() {
    const { classes, sprint, title } = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {title}
          </Typography>
          <Typography component="div">
            <ReactMarkdown source={sprint} />
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SprintCard);
