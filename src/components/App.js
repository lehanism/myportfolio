import React from 'react';

import { Route, withRouter, Switch } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';

import ScrollToTop from './ScrollToTop';
import SidePanel from './SidePanel';
import Home from './Home';
import Now from './Now';
import Projects from './Projects';
import Footer from './Footer';

const App = withRouter(({ location }) =>(
   <div className="App">
      <div className="container">
        <SidePanel />
        <ScrollToTop>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={{enter: 400, exit: 0}}
              exit={false}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/now" component={Now}/>
                <Route path="/projects" component={Projects}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </ScrollToTop>
      </div>
      <Footer />
    </div>
))

export default App;
