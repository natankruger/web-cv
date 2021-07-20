import React from 'react';
import selfie from './selfie.png'
class Biography extends React.Component {

  render() {

    return <section className="biography mt-3" >
      <div>
        <img src={ selfie } className="profile-pic" alt="Profile Natan face" />
      </div>
      <div className="mt-3">
        <p>
          { this.props.bio }
        </p>
      </div>
    </section>
  }
}

export default Biography;
