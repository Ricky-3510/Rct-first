import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

import logo from '../assets/logo.jpg';
const Navbar = () => {
  return (
    <div>
    <nav
      style={{
        ...styles.nav,
        backgroundImage:
          'linear-gradient(to right, rgb(255, 255, 255), rgb(119, 235, 255))',
      }}
    >
      <a className="navbar-brand" href="/">
        <img
          className="logos d-inline-block align-text-top"
          src={logo}
          alt="Logo"
          style={styles.brandImg}
        />
      </a>
      <div>
        <ul style={styles.navLinks} >
        <li style={{ fontSize: '17px', color: 'black'}}><i style={{paddingRight:'5px'}} className="fa fa-home"></i><a href="/" style={styles.link}>Home</a></li>
        <li style={{ fontSize: '17px', color: 'black' }}>
          <i style={{ paddingRight: '5px' }} className="fa fa-info-circle" aria-hidden="true" />
          <a href="/About" style={styles.link}>About</a>
        </li>
        <li style={{ fontSize: '17px', color: 'black' }}>
          <i style={{ paddingRight: '5px' }} className="fa fa-address-card" aria-hidden="true" />
          <a href="/Contact" style={styles.link}>Contact</a>
        </li>
        <li style={{ fontSize: '17px', color: 'black' }}>
          <i style={{ paddingRight: '5px' }} className="fa fa-sign-in" aria-hidden="true" />
          <a href="/LogIn" style={styles.link}>Log In</a>
        </li>

      </ul>
      </div>
      <div>
        <form className="d-flex" style={{ paddingRight: '100px' }}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </nav>
<br></br>
<div>
      <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      style={{ maxWidth: '1700px' , height:"2000px"}}
    >
      {[img1, img2, img3].map((img, idx) => (
        <div key={idx}>
          <img
            src={img}
            alt={`Slide ${idx + 1}`}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </Carousel>
    </div>
  

</div>

  )



  
}
const styles = {
  nav: {
    display: 'flex',
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
    cursor: 'pointer',
  },
  brandImg: {
    paddingRight: '20px',
  },
  logo: {
    fontSize: '1.5rem',
    Width: '1000px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.9rem',
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#424242',
  }
};
export default Navbar