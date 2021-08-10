import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'value': 'assignment'
    }
  }

  handleChange(e: any, val: String) {
    this.setState({
      value: val
    })
  }

  render() {

    const transitionDuration = {
      enter: 300,
      exit: 200
    };

    return (
      <div className={styles.container}>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        {this.state.value == 'assignment' ?(<Zoom
          in={this.state.value === 'assignment'}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${this.state.value === 'assignment' ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <div className={styles.add_assignment}>
          <Fab color="primary" aria-label="add" >
              <AddIcon />
            </Fab></div>
          </Zoom>):''}
        
        <BottomNavigation value={this.state.value} onChange={this.handleChange.bind(this)} showLabels className={styles.tab}>
          <BottomNavigationAction label="待办" value="assignment" icon={<AssignmentIcon />} />
          <BottomNavigationAction label="我的" value="person" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}