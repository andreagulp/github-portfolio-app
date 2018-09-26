import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

import * as actions from "../actions/filter";

class FilterSelection extends Component {
  handleIsClosedChange = name => event => {
    this.props.getFilterIsClosed(event.target.checked);
  };
  handleIsTopChange = name => event => {
    this.props.getFilterIsTop(event.target.checked);
  };

  render() {
    const { filters } = this.props;
    return (
      <div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={filters.isClosed}
                onChange={this.handleIsClosedChange("isClosed")}
                value="isClosed"
              />
            }
            label="Show Closed Project"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={filters.isTop}
                onChange={this.handleIsTopChange("isTop")}
                value="isTop"
              />
            }
            label="Filter Top Project"
          />
        </FormGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

export default connect(
  mapStateToProps,
  actions
)(FilterSelection);
