import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ShareButton extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Tooltip title="Share This Project" placement="top">
          <IconButton aria-label="Share" onClick={this.handleClickOpen}>
            <ShareIcon color="primary" />
          </IconButton>
        </Tooltip>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Share This Project"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {window.location.href}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default ShareButton;
