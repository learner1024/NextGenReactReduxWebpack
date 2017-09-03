import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

export default class AppBar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const {children} = this.props;

    return (
      <Toolbar>
        <ToolbarGroup style={{paddingLeft: 20}} firstChild>

        </ToolbarGroup>
        <ToolbarGroup>
          <TextField
            hintText="Search"
            style={{width: 120, marginLeft: 20, marginTop: 3, fontSize: 13}}
            inputStyle={{color: 'white'}}
            hintStyle={{color: 'white'}}
            underlineFocusStyle={{borderColor: 'white'}}
          />
          <IconButton tooltip="Search">
            <ActionSearchIcon color="white" />
          </IconButton>
          {children}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
