import React from 'react';

import skills from './skillsData';

class Skills extends React.Component {

  listSkills() {
    let t = this.props.t;

    let list = skills.map((item, key) => {
      return <li className="job-item mt-2" key={ `skills-item-${key}` } >
          <p>
            { item.name }
          </p>
        </li>
    });

    return <ul className="skills-list">
      <p>
        {t("skills")}
      </p>
      {list}
  </ul>
  }

  render() {
    return <section className="skills">
      {this.listSkills()}
    </section>
  }
}

export default Skills;
