import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Home' },
  { to: '/fashion', label: 'Fashion' },
  { to: '/fineart', label: 'Fine Art' },
  { to: '/experimental', label: 'Experimental' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      responsive: false
    }
  }
  render() {
    const links = routes.map(({ to, label }) => {
      return <NavLink strict exact to={to} key={to} style={{ color: '#a17b1b' }} activeStyle={{ color: '#FFD700' }}>{label}</NavLink>
    })
    return (
      <nav className={this.state.responsive ? 'responsive' : 'topNav'}>
        {links}
        <button href='#'className="icon" style={{cursor:'pointer'}} onClick={() => this.setState({responsive: !this.state.responsive})}>
          <i style={{ color: '#a17b1b' }} className="fa fa-bars fa-lg"/>
        </button>
      </nav>
    )
  }
}

export default Nav
