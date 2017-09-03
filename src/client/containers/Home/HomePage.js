import React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {FormattedMessage, FormattedRelative} from 'react-intl';


import styles from './serversPage.scss';

export class ServersPage extends React.Component {
  static propTypes = {

  };

  static defaultProps = {
    serversLastUpdate: null
  };

  componentDidMount() {

  }

  render() {
    const {} = this.props;

    return (
      <section style={{padding: 20}}>
        Home Page bhavesh
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(ServersPage);
