import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { connect } from "react-redux";
import { compose } from "redux";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as actions from "../actions/sort";

const styles = theme => ({
  root: {
    display: "block"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  sortDirection: {
    display: "block",
    backgroundColor: "#e1e4ea",
    textAlign: "center"
  }
});

class SortSelection extends Component {
  handleSortFieldChange = event => {
    console.log(event.target.value);
    this.props.getSortField(event.target.value);
  };

  handleSortDirectionChange = event => {
    this.props.getSortDirection(event.target.checked);
  };

  render() {
    const { classes, sortValue } = this.props;
    console.log("sortValue", sortValue);
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Sort</FormLabel>
          <RadioGroup
            aria-label="Sort"
            name="sort"
            className={classes.group}
            value={sortValue.field}
            onChange={this.handleSortFieldChange}
          >
            <FormControlLabel
              value="titleSort"
              control={<Radio color="primary" />}
              label="By Name"
            />
            <FormControlLabel
              value="savings"
              control={<Radio color="primary" />}
              label="By Savings"
            />
            {/* <FormControlLabel
              value="top"
              control={<Radio color="primary" />}
              label="By Top Project"
            /> */}
          </RadioGroup>
        </FormControl>

        <Paper square={true} className={classes.sortDirection}>
          <Grid container spacing={16}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Typography variant="display1" gutterBottom>
                a-z
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Switch
                checked={sortValue.direction}
                onChange={this.handleSortDirectionChange}
                value="direction"
                color="primary"
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Typography variant="display1" gutterBottom>
                z-a
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sortValue: state.sortValue };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    actions
  )
)(SortSelection);
