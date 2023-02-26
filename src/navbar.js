// import logo from './img/logo.PNG';
const Navbar = () => {
    return (  
<nav className="navbar">
    {/* <div className='logo'> <img src={logo} alt='' /></div> */}
    <div className="links">
        <a href="About">About</a>
      <a href="Experience"> Experience</a>
       <a href="Details"> Details</a>
       <a href="New">News</a>
           </div>
</nav>
    );
}
 
export default Navbar;