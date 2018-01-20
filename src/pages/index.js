import React, { Component } from 'react';

import Qpanel from '../components/Qpanel';

class Home extends Component {
  render() {
    return (
      <div className="home page">

        <h1>Hi! I'm <span className="red">Luke Lehane</span>.<br /> I love using the latest web technologies to build beautiful things.</h1>

        <p>As well as trying to get my head around the fast paced and ever evolving world of coding, I'm a big fan of extreme metal and progressive rock music. I also like to think about interesting philosophical things and can often be heard trying to convince people that they have no free will. I've recently started to dabble in personal development and enjoy awesome people like Tim Ferris, Sam Harris, Derek Sivers (I wish he would just put some margin at the top of his website), and loads of other people I can't think of right now. Listening to podcasts on my commute has become one of my favourite ways to consume information.</p>

        <Qpanel
          Qtext="Thank you for not making my design look like dog shite"
          Qauthor="a designer to me"
        />


      </div>
    );
  }
}

export default Home;
