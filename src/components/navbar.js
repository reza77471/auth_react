import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/login"
    }
    render(){
        return(
            <Navbar bg="light" variant="light">
            <Navbar.Brand> <Link to='/' className="text-primary">Home</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link> <Link to='/jurusan' className="text-primary"> Jurusan </Link> </Nav.Link>
                    <Nav.Link> <Link to='/pegawai' className="text-primary"> Pegawai </Link> </Nav.Link>
                    <Nav.Link> <Link to='/siswa' className="text-primary"> Siswa </Link> </Nav.Link>
                    <Nav.Link> <Link to='/pelanggaran' className="text-primary"> Pelanggaran </Link> </Nav.Link>
                    <Nav.Link> <Link to='/pelanggaran_siswa' className="text-primary"> Pelanggaran Siswa </Link> </Nav.Link>
                    <Nav.Link onClick={() => this.Logout()}>Logout</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default NavBar;
