import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import BarChart from "@material-ui/icons/BarChart";
import Home from "@material-ui/icons/Home";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {
    selectedIndex: 1
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { navOpen, toggleNav } = this.props;
    return (
      <Drawer open={navOpen} onClose={toggleNav}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleNav}
          onKeyDown={toggleNav}
        >
          <List component="nav">
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItem
                button
                selected={this.state.selectedIndex === 0}
                onClick={event => this.handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItem>
            </Link>

            <Link to="/metrics" style={{ textDecoration: "none" }}>
              <ListItem
                button
                selected={this.state.selectedIndex === 0}
                onClick={event => this.handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="Metrics" />
              </ListItem>
            </Link>

            <Link to="/testpage" style={{ textDecoration: "none" }}>
              <ListItem
                button
                selected={this.state.selectedIndex === 0}
                onClick={event => this.handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Test Page" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    );
  }
}

export default Navigation;
