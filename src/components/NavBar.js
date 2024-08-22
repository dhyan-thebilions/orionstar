import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from "reactstrap";
import "../styles/NavBar.css";

const NavBar = () => {
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);
    return (
        <React.Fragment>
            <Navbar expand="lg">
                <NavbarBrand href="/" className="nav-logo">
                    <img alt="logo" src="/assets/nav-logo.svg" />
                </NavbarBrand>
                <NavbarToggler onClick={toggleOffcanvas} />
                <Collapse navbar>
                    <Nav className="ms-auto align-items-center" navbar>
                        <NavItem>
                            <NavLink href="/" className="nav-font">
                                Home
                            </NavLink> 
                        </NavItem>
                        <NavItem>
                            <NavLink href="/games" className="nav-font">
                                Games
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/download" className="nav-font">
                                How To Download The App
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/registration" className="nav-font">
                                Player Registration
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/distributors" className="nav-font">
                                Store and Distributors
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/faq" className="nav-font">
                                FAQ
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Offcanvas
                isOpen={offcanvasOpen}
                toggle={toggleOffcanvas}
                direction="end"
            >
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    Offcanvas Title
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/games">Games</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/download">How To Download The App</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/registration">Player Registration</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/distributors">Store and Distributors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/faq">FAQ</NavLink>
                        </NavItem>
                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
        </React.Fragment>
    );
};

export default NavBar;
