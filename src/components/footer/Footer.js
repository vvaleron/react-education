import React from 'react';
import styles from './Footer.css';
import jade from './footer.jade';

class Footer extends React.Component {
  render() {
    return jade({styles});
  }
}

export default Footer;
