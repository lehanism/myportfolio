import React, { Component } from 'react';

import Qpanel from '../components/Qpanel';

class Now extends Component {
  render() {
    return (
      <div className="page">

        <h1>Projects I Am <span className="red">Tinkering</span></h1>

        <h2>Web Dev</h2>

        <p>I'm working at a great design and marketing agency called TFA where I use HTML5, CSS3 and JS/jQuery to code up the front ends of awesome designs that are thrown my way. We use a PHP laravel based backend and custom CMS for most of our websites and I'm enjoying brushing up my skills with that as well as the front end stuff.</p>

        <p>In my spare time I'm learning React. This portfolio is the first result of experiments with the popular JavaScript framework. I'm loving it so far and I've got some ideas for interesting projects that I can't wait to start.</p>

        <Qpanel
          Qtext="Wow, it's almost as if he knows what he's doing!"
          Qauthor="another designer to me (and quite a lot of people, it's a bit of a catchphrase of his)"
        />


      </div>
    );
  }
}

export default Now;
