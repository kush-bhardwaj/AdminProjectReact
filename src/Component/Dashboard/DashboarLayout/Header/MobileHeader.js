import "./Header.css"
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { getStorage } from '../../../../UTILS/Storage';
import { LOGO_URL } from '../../../../URL/URL';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [openNavExternal, setOpenNavExternal] = useState(false);

  return (
    <>
      <div className='mobileHeader'>
      <MDBCollapse open={openNavExternal}>
      <Navbar className="bg-color">
      <Container>
        <Navbar.Brand href="#home"><img src={`${LOGO_URL}file.png`} alt='logo' style={{width:"60px"}}></img><span style={{fontWeight:"bold",}}>Megaz</span>Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as: <a href="#login">{AdminName.data.name}</a> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </MDBCollapse>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavExternal(!openNavExternal)}
          >
            <FaBars icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
      </div>
    </>
  );
}