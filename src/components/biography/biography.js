import React from 'react';

class Biography extends React.Component {

  render() {
    let profilePicUrl = "https://media-exp1.licdn.com/dms/image/C4E03AQHKgSRR3K_eSw/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=klMh7PEbiHi0liucC0wq0zz-fhfaSuYbUh7pqAwe0q8"

    return <section className="biography mt-3" >
      <div>
        <img src={ profilePicUrl } className="profile-pic" alt="Profile Natan face" />
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
