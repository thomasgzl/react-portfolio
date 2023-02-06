import { user } from '../../const';
import React from 'react'

function AboutPage() {
    return (
      <div>
        <h1>About</h1>
        <p>{user.name}<br />{user.function}</p>
      </div>
    );
  }

  export default AboutPage;