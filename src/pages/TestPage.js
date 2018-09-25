import React, { Component } from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import AttachMoney from "@material-ui/icons/AttachMoney";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRate from "@material-ui/icons/StarRate";

class TestPage extends Component {
  render() {
    return (
      <div>
        <h4>TestPage Component Working</h4>
        <Badge badgeContent={4.1} color="primary">
          <i class="fas fa-piggy-bank fa-lg" />
        </Badge>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Badge badgeContent={4.1} color="primary">
          <AttachMoney />
        </Badge>
        <StarRate />
      </div>
    );
  }
}

export default TestPage;
