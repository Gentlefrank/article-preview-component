import logo from './logo.svg';
 

function App() {

 const onclick =()=> {
    const following= document.querySelector('follow')
    following.classList.replace('display-inlineBlock', 'display-none');
  }
  
  return (
    <div className="container">
      
      <div className='left-side'>
      <img src='images/drawers.jpg' alt='drawers' />
      </div> 

      <div className='right-side'>
      <article>
      <h1 className='fontBlack'>Shift the overall look and feel by adding these wonderful touches to furniture
      in your home</h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt slightly 
        bare and uninviting. I've got some tips to help you make any room feel complete.
      </p>
      <div className='follow' id='followKey'>
    
   <span className='follow-span'>SHARE</span>   <img src='images/icon-facebook.svg' alt='facebook' />
     <img src='images/icon-twitter.svg' alt='twitter' />
     <img src='images/icon-pinterest.svg' alt='pinterest' />

    </div>
    <div className='arrow'></div>
      <div className='footer'>
    <div className='item1'>
      <img src='images/avatar-michelle.jpg' />
    </div>
    <div className='item2'>
    <p className='fontBold'>Michelle Appleton</p>
    <p>28 Jun 2020</p>
    </div>
    <div className='item3'>
    
    <button className='share' onClick={onclick()} ><img src='images/icon-share.svg' alt='share' /></button>
    </div>

      </div></article>
      </div>

    </div>
  );
}

export default App;
