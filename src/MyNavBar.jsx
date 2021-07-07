import {Navbar,Nav,Container} from 'react-bootstrap'

const MyNavBar = () =>(


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">mybooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">home</Nav.Link>
        <Nav.Link href="#pricing">about</Nav.Link>
       
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Browse</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MyNavBar



