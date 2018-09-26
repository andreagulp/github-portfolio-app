import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";

import SortSelection from "./SortSelection";
import FilterSelection from "./FilterSelection";

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
    // minWidth: 300
  },
  filterContainer: {
    padding: 5
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
        <div className={classes.filterContainer}>
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
            <SortSelection />
          </div>
          <div
            tabIndex={1}
            role="button"
            //   onClick={toggleFilters}
            //   onKeyDown={toggleFilters}
          >
            <FilterSelection />
          </div>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FiltersPannel);
