import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

class LabelList extends Component {
  render() {
    const { labels } = this.props;
    return (
      <div>
        {labels.map(label => {
          return <Chip label={label.name} variant="outlined" key={label.id} />;
        })}
      </div>
    );
  }
}

export default LabelList;
