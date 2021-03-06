import React from 'react';

import works from './timelineData';

class Timeline extends React.Component {
  listWorks() {
    let t = this.props.t;

    let list = works.map((item, key) => {
      return <li className="job-item mt-2" key={ `timeline-item-${key}` } >
          <h3>
            { item.companyName }
          </h3>
          <p>
            { t(item.jobDescription) }
          </p>
          <span className="text-muted mb-2">
            { item.startedAt } - { item.endedAt }
          </span>
        </li>
    });

    return <ul className="jobs-list p-0">
        { list }
    </ul>
  }

  render() {

    return <section className="timeline">
      { this.listWorks() }
    </section>
  }
}

export default Timeline;
