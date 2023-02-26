import './App.css'
import Navbar from './navbar';
import Home from './home';
import pic from './img/IMG.PNG';
import img from './img/peng1.jpg';
import img2 from './img/peng2.jpg';
import img3 from './img/peng3.jpg';
function App (){
  return (
  <div className = 'App'> 
  <Navbar/>
  <Home/>
  <div className='content'>

  <div className='right'> 
  <h1>&lt;Software-Developer&gt;</h1>
  <h4>Product designer specializing in UI design and design systems.</h4>
  </div>
  
  <div className='pic'>
    <img src={pic} alt='' />
    </div>
    <div className='left'>
<h1>  &lt;/Code&gt; </h1>
<h4>Front end developer who writes clean, elegant and efficient code. </h4>
  </div>

  
    </div>
     
    <div className='box'>
    
    <div className='text'>
      <div className=' work'>  <h3>Some Of My Previous Work</h3></div> 
      
     
      </div>
  <div className='boxx' >

    <div className='box1'>
    <div className='img1'>  <img src={img} alt='' /><h10>My home page website design</h10>  </div>
   
    </div>
  

    <div className='box2'>
    <div className='img2'><img src={img2} alt='' /><h10>My home page website design</h10>  </div>
    
    </div>
    <div className='box3'>
    <div className='img3'><img src={img3} alt='' /><h10>My home page website design</h10>  </div>
    </div>
    </div>
    <div className='footer'>
      <div className='copy'><a href="hih">@2023 Tiamiyu Ahmed Olamide</a> </div>
      <div className='link'>
      <a href="about">about</a>
      <a href="Experience"> blog</a>
      <a href="New">book</a>
       <a href="Details"> portfolio</a>
       <a href="New">contact</a>
     </div>
     </div>

    </div>
  </div>
  
  )
}
export default App; 