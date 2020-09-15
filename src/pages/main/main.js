import React from 'react';

import Contact from '../../components/contact';
import Biography from '../../components/biography';
import Skills from '../../components/skills';
import TimeLine from '../../components/timeline';


class Main extends React.Component {

  render() {
    let t = this.props.t;

    return <>
      <Contact />
      <Biography bio={ t('biograpy-description') } />
      <Skills t={ t.bind(this) } />
      <TimeLine t={ t.bind(this) } />
    </>
  }
}

export default Main;