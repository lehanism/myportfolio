import React from "react";

import SidePanel from '../components/SidePanel';
import Footer from '../components/Footer';
import '../css/App.css'

export default ({ children }) =>
  <div className="App">
    <div className="container">
      <SidePanel />
      {children()}
    </div>
    <Footer />
  </div>