import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false)
  const [theDisplay, setTheDisplay]=useState(null)
  const [theArrow, setTheArrow]=useState(null)
 

 const getClick=()=>{

  if(!visible){
    setTheDisplay(true)
    setTheArrow(true)
    setVisible(true)
     
    console.log(visible)
 
  } else{
    
      setTheDisplay (false)
      setTheArrow(false)
      setVisible(false)
       
      console.log(visible)
  }

 }
 const toggleDisplay =()=>{

 }
  return (
    <div className="container">
      
      <div className='left-side'>
      <img src='images/drawers.jpg' alt='drawers' />
      </div> 

      <div className='right-side'>
      <article >
      <h1 className='fontBlack'>Shift the overall look and feel by adding these wonderful touches to furniture
      in your home</h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt slightly 
        bare and uninviting. I've got some tips to help you make any room feel complete.
      </p>
      <div className='follow' id='followKey' style={{ display:  theDisplay ? 'inline-block' : 'none' }}>
    
   <span className='follow-span'>SHARE</span>   <img src='images/icon-facebook.svg' alt='facebook' />
     <img src='images/icon-twitter.svg' alt='twitter' />
     <img src='images/icon-pinterest.svg' alt='pinterest' />

    </div>
    <div className='arrow' style={{ display:  theArrow ? 'inline-block' : 'none' }}></div>
      <div className='footer'>
    <div className='item1'>
      <img src='images/avatar-michelle.jpg' />
    </div>
    <div className='item2'>
    <p >Michelle Appleton</p>
    <p>28 Jun 2020</p>
    </div>
    <div className='item3' onClick={getClick}>
    
    <button className='share'   ><img src='images/icon-share.svg' alt='share' /></button>
    </div>

      </div></article>

      <div className='footer-follow'>
      <div className='follow-items'>
    <span className='follow-span'>SHARE</span>  
     <img src='images/icon-facebook.svg' alt='facebook' />
     <img src='images/icon-twitter.svg' alt='twitter' />
     <img src='images/icon-pinterest.svg' alt='pinterest' />
     </div>
     <div>
     <button className='share-footer'   ><img src='images/icon-share.svg' alt='share' /></button>
     </div>
    </div>
      </div>



    </div>
  );
}

export default App;
