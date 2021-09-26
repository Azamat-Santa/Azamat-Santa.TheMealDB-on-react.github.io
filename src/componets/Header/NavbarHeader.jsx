import React from 'react'
import { Form, FormControl, Nav, NavLink, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function NavbarHeader({name,changeName,send}) {
    return (

        <Navbar bg="light" expand="lg" fixed="top">
            <NavLink to='/' style={{ textDecoration: 'none' }}><Navbar.Brand href="#" className='pr-10'>TheMealDB</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: '10px', }} />
            <Navbar.Collapse id="navbarScroll" >
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll

                >
                    <NavLink to='/' style={{ textDecoration: 'none', paddingLeft: '10px' }}> <Nav.Link href="#action1">Home</Nav.Link></NavLink>
                    <NavLink to='/contact/' style={{ textDecoration: 'none', paddingLeft: '10px' }}><Nav.Link href="#action2">Contact</Nav.Link></NavLink>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                        value={name}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => changeName(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={send}><Link  to='/searchOutput/'  >Search</Link></Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>

    )
}
