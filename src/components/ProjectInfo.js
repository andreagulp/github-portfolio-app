import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import LabelList from "./LabelList";
import { REPOS } from "../data/repos";
import { getSquadAvatar } from "../utils";

const styles = theme => ({
  card: {
    // maxWidth: 400,
    marginTop: 5
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500],
    width: 60,
    height: 60
  },
  divider: {
    margin: 15
  }
});

class ProjectInfo extends Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    if (!this.props.project[0]) {
      return <div>...loading</div>;
    }
    const project = this.props.project[0];
    const { classes } = this.props;
    console.log("project from Sprints", project);
    const getSquadName = getSquadAvatar(project.repository_url, REPOS);
    console.log("squadName", getSquadName);
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt={project.assignee.name}
              src={project.assignee.avatar}
              aria-label="Recipe"
              className={classes.avatar}
            />
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={project.title}
          subheader={project.state}
        />
        <CardContent>
          <Typography component="p">
            <b>Squad: </b>
            {`${getSquadName.squad}`}
          </Typography>

          <Divider className={classes.divider} />
          <Typography component="p">
            <b>Forecasted Savings: </b>
            {`${project.savings} FTE`}
          </Typography>

          <Divider className={classes.divider} />
          <Typography component="p">
            <b>Project Description: </b>
            {`${project.description}`}
          </Typography>

          <Divider className={classes.divider} />
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography component="p">
              <b>Project Benefits: </b>
              {`${project.benefits}`}
            </Typography>

            <Divider className={classes.divider} />
            <Typography component="p">
              <b>Project Goal: </b>
              {`${project.goal}`}
            </Typography>

            <Divider className={classes.divider} />
            <Typography component="p">
              <b>Project Due Date: </b>
              {`${project.dueDate}`}
            </Typography>

            <Divider className={classes.divider} />
            <Typography component="div">
              <LabelList labels={project.labels} />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectInfo);
