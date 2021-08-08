import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const  AppNav = ({
  //maps thru all nav items by index which are in json file in line 22
  navItems, 
  handleNavClick 
}) => {
  //open and close nav menu
  //setCollapsed referred to line 12
  const[collapsed,setCollapsed] = useState(true);
  //toggle nav bar
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }
    return (
      <div>
    <Navbar color="faded" light>
        <NavbarBrand href="/"   className="mr-auto">Menu</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          {navItems.map((navItem,index) =>
            <NavItem key={index}>
              <NavLink href="/" onClick={ (e) =>{ e.preventDefault();  handleNavClick(navItem.value)}}>{navItem.label}</NavLink>
            </NavItem>
          )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )

}

export default AppNav;


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <nav>
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick(navItem.value)} >
//           {navItem.label} |
//         </a>
//       )}
//     </nav>
//   );
// }
