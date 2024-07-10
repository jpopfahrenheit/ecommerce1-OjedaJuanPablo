import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import { Logo } from "./Logo";

export const NavBar = () => (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Logo />
                <Navbar.Brand href="#home">Zapatillas Center</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Categorías">Categorías</Nav.Link>
                    <Nav.Link href="#Hombre">Hombre</Nav.Link>
                    <Nav.Link href="#Mujer">Mujer</Nav.Link>
                    <Nav.Link href="#Niños">Niños</Nav.Link>
                    <Nav.Link href="#Marcas">Marcas</Nav.Link>
                    <Nav.Link href="#Lanzamiento">Lanzamiento</Nav.Link>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    </>
);s