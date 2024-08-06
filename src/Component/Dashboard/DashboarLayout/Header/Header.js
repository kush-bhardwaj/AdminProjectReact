import "./Header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { getStorage } from '../../../../UTILS/Storage';
import { LOGO_URL } from '../../../../URL/URL';

function AdminHeader() {
    const AdminName = getStorage()
    // console.log("admin",AdminName)
  return (
    <Navbar className="bg-color">
      <Container>
        <Navbar.Brand href="#home"><img src={`${LOGO_URL}file.png`} alt='logo' style={{width:"60px"}}></img><span style={{fontWeight:"bold",}}>Megaz</span>Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{AdminName.data.name}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;