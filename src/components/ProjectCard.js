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
import { Link } from "react-router-dom";

import { getSquadAvatar } from "../utils";
import { REPOS } from "../data/repos";
import LabelList from "./LabelList";

const styles = theme => ({
  card: {
    // maxWidth: 400,
    // minHeight: 400
  },
  header: {
    minHeight: 100
    // width: "100%"
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
  },
  actionArea: {
    width: "100%"
  }
});

class ProjectCard extends Component {
  render() {
    const { classes, project } = this.props;
    const getSquadName = getSquadAvatar(project.repository_url, REPOS);
    return (
      <Card className={classes.card}>
        <Link to={`/${project.id}`} style={{ textDecoration: "none" }}>
          <CardActionArea className={classes.actionArea}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Recipe"
                  style={{
                    backgroundColor: getSquadName.color,
                    fontSize: 12
                  }}
                >
                  {getSquadName.squad}
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
