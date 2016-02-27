import React from 'react';
import styles from './Header.css';
import jade from './header.jade';

class Header extends React.Component {
  render() {
    return jade({styles});
  }
}

export default Header;
