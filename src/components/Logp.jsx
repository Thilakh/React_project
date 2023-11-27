
import {useState,useEffect} from "react";
import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import * as Components from '../Components';
import Top from './Top';
import axios from 'axios';
import { useContext } from "react";
import { userContext } from "./Context";


function Combine() {
    const[user,setuser]=useContext(userContext);
    const [id, idchange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
 

  const usenavigate=useNavigate();

  useEffect(()=>{
sessionStorage.clear();
  },[]);

  const ProceedLogin = async (e) => {
    e.preventDefault();
    try {
      const apiurl = `http://localhost:8000/user?email=${email}`;
      const response = await axios.get(apiurl);
      
      if (
        response.data.length !== 0 &&
        
        response.data[0].password === password
      ) {
        // seterro(false);
        
        console.log('Logged in Successfully.');
        setuser(email);
        navigate('/');
        
      } else {
        
        console.log("Incorrect Username or Password.");
        
        
      }
    } catch (erro) {
      console.log('Error during API call:', erro);
      // Handle error, maybe seterro(true) and navigate('/')
    }
  };
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            console.log(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                console.log('Please enter the valid email')
            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, password, email };
        if (IsValidate()) {
        //console.log(regobj);
        axios.post('http://localhost:8000/user', regobj, {
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => {
            console.log('Registered successfully.')
            navigate('/login');
        }).catch((err) => {
            console.error('Failed :' + err.message);
        });
    }
}

  return (
    <>
    <Top />
   
    <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={handlesubmit}>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input value={id} onChange={e => idchange(e.target.value)} type='text' placeholder='Name' />
                     <Components.Input value={email} onChange={e => emailchange(e.target.value)} type='email' placeholder='Email' />
                     <Components.Input value={password} onChange={e => passwordchange(e.target.value)}type='password' placeholder='Password'/>
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={ProceedLogin}>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      
                      <Components.Button >Sigin In</Components.Button>
                      
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph >
                        <b> To keep connected with us please login with your personal info</b>
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Traveller!</Components.Title>
                       <Components.Paragraph>
                           <b>Enter Your details to get Started</b>
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
        
         </>
    
  );
}

export { Combine };