import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Footer, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import './index.css';

import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    };
  }
  componentDidMount(){
    document.title = "Circle BMW HR System"
  }
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

  closeCollapse = collapseID => () => this.state.collapseID === collapseID && this.setState({ collapseID: '' });

  render() {
    const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.toggleCollapse('mainNavbarCollapse')} />;
    return (
      <Router>
        <div className="flyout">
          <Header />
          { this.state.collapseID && overlay}
          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>

          <Footer color="black">
          
          <p className="footer-copyright mb-0 py-3 text-center">
            &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.circlebmw.com/" target="_blank"> Circle BMW </a>
          </p>
        </Footer>
        </div>
      </Router>
    );
  }
}

export default App;

