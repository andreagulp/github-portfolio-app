import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import FilterList from "@material-ui/icons/FilterList";

import Navigation from "./Navigation";
import FiltersPannel from "./FiltersPannel";
import ProjectSearch from "./ProjectSearch";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block"
    // }
  }
});

class Header extends Component {
  state = {
    navOpen: false,
    filtersOpen: false
  };

  toggleNav = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
  toggleFilters = () => {
    this.setState({ filtersOpen: !this.state.filtersOpen });
  };

  renderPageTitle = () => {
    switch (window.location.pathname) {
      case "/":
        return "Kaizen Portfolio";
      default:
        return "Project Details";
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleNav}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap
            >
              {this.renderPageTitle()}
            </Typography>
            <div className={classes.grow} />
            {window.location.pathname === "/" ? <ProjectSearch /> : <div />}

            {window.location.pathname === "/" ? (
              <div>
                <IconButton color="inherit" onClick={this.toggleFilters}>
                  <FilterList />
                </IconButton>
              </div>
            ) : (
              <div />
            )}
          </Toolbar>
        </AppBar>

        <Navigation navOpen={this.state.navOpen} toggleNav={this.toggleNav} />
        <FiltersPannel
          filtersOpen={this.state.filtersOpen}
          toggleFilters={this.toggleFilters}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Header);
