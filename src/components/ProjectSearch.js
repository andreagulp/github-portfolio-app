import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../actions/search";

const styles = theme => ({
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
      width: 200,
      "&:focus": {
        width: 300
      }
    }
  }
});

class ProjectSearch extends Component {
  handleFieldChange = e => {
    this.props.getSearchKeyword(e.target.value);
  };

  render() {
    const { classes, keyword } = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Input
          placeholder="Search Project Name..."
          disableUnderline
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={keyword}
          onChange={this.handleFieldChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { keyword: state.keyword };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    actions
  )
)(ProjectSearch);
