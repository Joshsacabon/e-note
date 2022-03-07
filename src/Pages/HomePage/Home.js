import React, {useState} from 'react';
import './../../App.css';
import './../../Css/Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

export default function Home() {
  // const  [modalIsOpen , setmodalIsOpen ] = useState(false)

  // const [user, setUser] = useState('Client');

  // const handleUser = (e) =>{
  //   setUser(e.target.value)
  // }

  // let link = user === 'Client' ? "/clientmenu/dashboard" : "/menu/dashboard";

  return (
    <>
     <Navbar/>
      <div className='home'>

        <div class="container-fluid ">
          <div class="col-lg-12">
                    <div class="main">
                        <div class="Headerhome borderstyle p-5">
                        "One day I will find the right words, and they will be simple."
                        </div>
                        <div class="">
                            <Link class="text-decoration-none btn btn-primary buttonhome p-3 mt-5" to="/Signup">get started</Link>
                        </div>
                    </div>
                </div>
           
{/* 
        <Link to="/signup" class="createbutton signupbutton">
          SIGN UP
        </Link>

        <button class="createbutton" 
          onClick={() => setmodalIsOpen(true)}
        >

          LOG IN
        </button> */}
        
        </div>

      </div>

      {/* <Modal 
              isOpen={modalIsOpen} 
              onRequestClose={() => setmodalIsOpen(false)} 
              style={
                {
                  overlay:{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0.9)'
                  },
                  content:{
                    height: '40%',
                    width: '72%',
                    top: 300,
                    left: 260,
                    textAlign: 'center',
                    backgroundColor: '#2FBCBC',
                    boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
                  }
                }
              }
              >
                  <div class="container-fluid pt-3">
                      <input class="logininput" type="email" placeholder="Email" name="uname" required/>
                      <br/>
                      <select class="logininput" name="user" onChange={handleUser}>
                        <option value="Client">Client</option>
                        <option value="Practitioner">Practitioner</option>
                      </select>
                      <br/>
                      <input class="logininput" type="password" placeholder="Password" name="psw" required/>
                      <br/>  
                      <button type="button" onClick={() => setmodalIsOpen(false)} class="cancelbtn">Cancel</button>
                      <button class="loginbutton" type="submit">
                        <Link to={link} className="loginbuttonlink" >
                          Log In
                        </Link>
                      </button>
                      <br/>
                  </div>
            </Modal> */}

    </>
  );
}
