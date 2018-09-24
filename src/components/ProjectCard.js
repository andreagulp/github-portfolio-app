import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LabelList from "./LabelList";
import { Link } from "react-router-dom";

import { REPOS } from "../data/repos";

const styles = theme => ({
  card: {
    // maxWidth: 400,
    // minHeight: 400
  },
  header: {
    minHeight: 100
  },
  content: {
    minHeight: 100
    // maxHeight: 100
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
  }
});

class ProjectCard extends Component {
  getAvatar = () => {
    const { repository_url } = this.props.project;

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

  render() {
    const { classes, project } = this.props;
    return (
      <Card className={classes.card}>
        <Link to={`/${project.id}`} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Recipe"
                  style={{
                    backgroundColor: this.getAvatar().color,
                    fontSize: 12
                  }}
                >
                  {this.getAvatar().squad}
                </Avatar>
              }
              title={project.title}
              subheader={project.state}
              className={classes.header}
            />
          </CardActionArea>
        </Link>
        <CardContent className={classes.content}>
          <LabelList labels={project.labels} />
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton>
            <i className="fab fa-github" />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectCard);
