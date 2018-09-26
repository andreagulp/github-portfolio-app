import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../actions/filter";
import { getLabels } from "../selectors/projectsSelector";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  select: {
    width: 300
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class FilterLabels extends Component {
  handleChange = event => {
    this.props.getFilterLabels(event.target.value);
  };

  render() {
    const { classes, filters, labels } = this.props;
    console.log("getLabels", labels);
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">
            Filter by Labels
          </InputLabel>
          <Select
            className={classes.select}
            multiple
            value={filters.labels}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {labels.map(label => (
              <MenuItem key={label} value={label}>
                <Checkbox checked={filters.labels.indexOf(label) > -1} />
                <ListItemText primary={label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
    labels: getLabels(state)
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    actions
  )
)(FilterLabels);
