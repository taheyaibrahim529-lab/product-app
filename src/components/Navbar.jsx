import {Link} from 'react-router-dom'

const Navbar =()=> {
  return (
    <nav className='navbar'>
        <h2 className='logo'>STORE</h2>
        <div className='naa'>
             <Link to="/">main  </Link>
             <Link to="/about">about us</Link>
        </div>
    </nav>
  )
}

export default Navbar
