import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Dashboard() {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#">Dashboard</Navbar.Brand>
                <Nav>
                    <img
                        className="rounded-circle shadow-4-strong"
                        src={"styles/images/avatar.png"}
                        alt="Profile"
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "70%",
                        }}
                    />
                </Nav>
                <Navbar className="ml-auto">
                    <Nav.Link href="/login">Logout</Nav.Link>
                </Navbar>
                
            </Navbar>
            <Container>
                <div
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        color: "red",
                    }}
                ></div>
            </Container>
        </div>
    );
}

export default Dashboard;
