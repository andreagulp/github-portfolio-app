import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

class FiltersPannel extends Component {
  state = {
    selectedIndex: 1
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { filtersOpen, toggleFilters, classes } = this.props;
    return (
      <Drawer
        variant="persistent"
        anchor="right"
        open={filtersOpen}
        onClose={toggleFilters}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleFilters}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <div
          tabIndex={0}
          role="button"
          //   onClick={toggleFilters}
          //   onKeyDown={toggleFilters}
        >
          Filter and Sort Filter and Sort Filter and Sort
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FiltersPannel);