import React, { useEffect} from 'react';
import './index.css';
import face from './images/face.svg';
import arrow from './images/arrow.svg'
// import male from './images/mars-symbol.svg'
// import female from './images/venus-symbol.svg'
// import $ from 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.js';
import $ from 'jquery';
function Login() {
  let toggleInput=false;
  useEffect(() => {
    // Update the document title using the browser API
    $('.form-input').show();
    $('.form-back').hide();
  });
  function toggleInputes(){
    toggleInput=!toggleInput;
 if (toggleInput) {
   $('.form-input').hide();
    $('.form-back').show();
 } else {
  $('.form-input').show();
  $('.form-back').hide();
 }
  }
return(
<div className='form'>

<div className="row">
  <div className="column" style={{background:'#ffd300',borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px',width:'40%',height:'508px'}}>
  
    <div className='row'><img src={face} className="center" style={{width:'40%',marginTop:'10%'}} alt="avatar"/></div>
    <div className='row' style={{marginTop:'10%',textAlign:'center'}}><h2>Front-end Challenge!</h2></div>
    <div className='row center' style={{width:'60%',textAlign:'center'}}>This is the design you will need to code up and impress us</div>
    <div className='row center' style={{marginTop:'10%',width:"10%", marginBottom:'15%'}}>
     <div className='avatar' onClick={toggleInputes} style={{background:'black',textAlign:'center'}}> <img src={arrow} alt='arrow next' className='avatar' style={{width:'30%'}} /></div>
    </div>
  </div>

  
  <div className="column form-input" style={{borderTopRightRadius:'20px',borderBottomRightRadius:'20px',width:'60%',height:'508px'}}>
    <div className='center' style={{width:'80%',marginTop:'10%'}}>
  <div className="row">
    <div className="col-25">
      <label >Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
  </div>
  
  
  <div className="row">
  <div className="col-25">  
    <div className='column'><label>Gender</label></div>

  </div>
  </div>
  

  <div className="row">
    <div className="col-25">
      <label >Date Of birth</label>
    </div>
    <div className="col-75">
      <input type="date" id="fname" name="dob"/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label >Email</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Email"/>
    </div>
  </div> 

  <div className="row">
    <div className="col-25">
      <label >Mobile</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="mobile" placeholder="+266 5677547"/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label >Customer ID</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="customer" placeholder="FF466-GFGF4-HUYD4"/>
    </div>
  </div>
  
  <div className="row">
  <div className="col-25">  
    <div className='column'><label>Membership</label></div>
 
  </div>
  </div>

  <div className='row center' style={{width:"50%",marginTop:'10%'}}>
    <div className='column'>
      <button className='button' style={{color:'black'}}>Cancel</button>
    </div>
    <div className='column'>
      <button className='button' style={{marginLeft:'15%',background:'#49c8a8'}}>Save</button>
    </div>
  </div>
    </div>
  </div>
  <div className="column form-back" style={{borderTopRightRadius:'20px',background:'#ff9200',borderBottomRightRadius:'20px',width:'60%',height:'508px'}}>
    <div className='center ' style={{width:'80%',marginTop:'6%',marginBottom:'35%',}}>
      <h2>My world today</h2>
      <p style={{height:'308px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis impedit recusandae, dolore tenetur eligendi autem temporibus adipisci perferendis doloremque delectus, minus error. Fuga, quia! Voluptate doloribus expedita quasi inventore quis voluptatum deserunt, cumque sit beatae quae quia vitae ipsum animi recusandae, ad fugit explicabo voluptates rerum? Voluptatibus nihil ullam non labore quae placeat porro modi dicta recusandae ex incidunt est fugit dolorem architecto voluptate inventore, quod reiciendis iste vero accusamus voluptates perspiciatis possimus totam. Doloremque aut sequi dolor incidunt voluptatum?</p>
    
    </div> 
  </div>
</div>
</div>
);
};

export default Login;