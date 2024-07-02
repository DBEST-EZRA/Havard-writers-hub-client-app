import React from "react";
import styled from "styled-components";

const SideNav = ({ isOpen }) => {
  return (
    <Nav isOpen={isOpen}>
      <NavItem>Dashboard</NavItem>
      <NavItem>Tasks</NavItem>
      <NavItem>Settings</NavItem>
    </Nav>
  );
};

export default SideNav;

const Nav = styled.nav`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const NavItem = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`;
