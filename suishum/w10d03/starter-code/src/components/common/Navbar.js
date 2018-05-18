import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  state = {
    navIsOpen: false
  }

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="http://static1.squarespace.com/static/5627abace4b0ea5e4f351658/5642e5b6e4b024d1dbe4e934/56de5b7d356fb0fca1c165fc/1457415608447/donutcome4me.png?format=500w"/>
            &nbsp;
          Donut City
          </Link>
          <div
            onClick={this.handleToggle}
            className={`navbar-burger ${this.state.navIsOpen ? 'is-active' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/donuts">All Donuts</Link>
            <Link className="navbar-item" to="/donuts/new">New Donut</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
