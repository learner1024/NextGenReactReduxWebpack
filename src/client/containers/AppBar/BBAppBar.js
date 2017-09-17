import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
});

function BBAppBar(props) {
  const classes = props.classes;
  const children = props.children;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
            <Typography type="title" color="inherit">
            {children}
            </Typography>
            <TextField
                hintText="Search"
                style={{width: 120, marginLeft: 20, marginTop: 3, fontSize: 13}}
                inputStyle={{color: 'white'}}
                hintStyle={{color: 'white'}}
                underlineFocusStyle={{borderColor: 'white'}}
            />
            <IconButton tooltip="Search">
                <SearchIcon color="default" />
            </IconButton>          
        </Toolbar>
      </AppBar>
    </div>
  );
}

BBAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(BBAppBar);