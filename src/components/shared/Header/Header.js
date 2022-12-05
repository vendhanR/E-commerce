import { useContext } from 'react';
import './Header.css'
import AppContext from '../../../context';
import { Link } from 'react-router-dom';

function Header(props){

  const {cartItems} = useContext(AppContext)
  


    return(
        <nav className="navbar navbar-expand-lg bg-blue">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">e-shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
                {/* <a className="btn btn-primary" href="/cart">
                  Cart &nbsp;
                  {
                    cartItems.length>0 && 
                    <span class="badge text-bg-warning">{cartItems.length}</span>
                  }
                  </a> */}
                  <Link className='btn btn-primary' to='/Cart'>
                  Cart &nbsp;
                  {
                    cartItems.length>0 && 
                    <span class="badge text-bg-warning">{cartItems.length}</span>
                  }
                  </Link>
              </li>
        <li className="nav-item">
          <a className="nav-link" href="/Register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Login">Sign In</a>
        </li>
      </ul>
    </div>
    {/* <button className="btn btn-primary">hello</button> */}
  </div>
</nav>
    );
}

export default Header