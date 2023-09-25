// import {Navbar, Nav} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Navbar from 'components/NavBar'
function Header() {
    return (
        <>
            {/* <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href ='#home'>Logo</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Link to='/add'>Add</Link>
                    <Link to='/update'>update</Link>
                    <Link to='/login'>login</Link>
                    <Link to='/register'>Register</Link>
                </Nav>
            </Navbar> */}
            <Navbar/>
        </>
    )
}

export default Header