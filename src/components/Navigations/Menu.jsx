import React from 'react';
import { connect } from 'react-redux';

import SideMenu from './Menus/SideMenu';
import BeersLikedContainer  from '../../containers/BeersLikedContainer';

const Menu = ({ isOpen, pageWrapId, toggleMenu }) => (
  <SideMenu
    isOpen={isOpen}
    toggleMenu={toggleMenu}
  >

  <h3 style={{ paddingTop: '50px' }}>Beers I like:</h3>
  <BeersLikedContainer />

  </SideMenu>
)

Menu.propTypes = {
  isOpen: React.PropTypes.bool,
  pageWrapId: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

export default Menu;
