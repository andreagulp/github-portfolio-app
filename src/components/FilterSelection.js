import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class FilterSelection extends Component {
  state = {
    checkedA: false,
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange("checkedA")}
                value="checkedA"
              />
            }
            label="Show Closed Project"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange("checkedB")}
                value="checkedB"
              />
            }
            label="Filter Top Project"
          />
        </FormGroup>
      </div>
    );
  }
}

export default FilterSelection;
