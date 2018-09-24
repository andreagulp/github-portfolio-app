import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import FilterList from "@material-ui/icons/FilterList";

import Navigation from "./Navigation";
import FiltersPannel from "./FiltersPannel";

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
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 100,
      "&:focus": {
        width: 200
      }
    }
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

            {window.location.pathname === "/" ? (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Input
                  placeholder="Search…"
                  disableUnderline
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            ) : (
              <div />
            )}

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
