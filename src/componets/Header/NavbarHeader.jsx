import React from 'react'
import { Form, FormControl, Nav, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../../App.css'
import { useSelector } from 'react-redux';

export default function NavbarHeader({name,changeName,send}) {

    let favoriteArr = useSelector(state => state.mealReducer.favorite)


    return (

        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#" to='/' className='pr-10'>TheMealDB</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: '10px', }} />
            <Navbar.Collapse id="navbarScroll" className='nabvarCollapse' >
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll

                >
                    <Link to="/" className='headerLink'>Главная</Link>
                    <div className='navLinkFavorite headerLink'><Link to="/favorite/" >Избранные</Link><span>{favoriteArr.length}</span></div>
                     <Link to="/contact/"className='headerLink' >Контакты</Link>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                        value={name}
                        type="search"
                        placeholder="Введите название"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => changeName(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={name===''?null:send}><Link  to={name===""?'/':'/searchOutput/'} className='btnFormControl'  >Поиск</Link></Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>

    )
}
