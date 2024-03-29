import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { getSquadAvatar } from "../utils";
import { REPOS } from "../data/repos";
import ProjectIconsIndicator from "./ProjectIconsIndicator";

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
    // minHeight: 100
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
          <Typography noWrap={true} component="p">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <ProjectIconsIndicator
            savings={project.savings}
            topProject={project.topProject}
          />
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectCard);
