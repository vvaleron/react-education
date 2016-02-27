import React from 'react';
import styles from './Content.css';
import jade from './content.jade';

class Content extends React.Component {
  render() {
    return jade({styles});
  }
}

export default Content;
