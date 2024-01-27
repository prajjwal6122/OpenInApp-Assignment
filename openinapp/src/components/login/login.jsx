// Login.js

import React, { useState } from 'react';
import loginImg from '../../lib/constants/Screenshot 2024-01-27 135720.png';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const[password,setPassword]=useState('');
  const[username,setUsername]=useState('');
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();

    // Check if the entered username and password match the desired values
    if (username === 'admin' && password === '12345678') {
      
     navigate('/layout');

     toast.success("Login Succesfull !", {
      position: "top-right",
    });
    } else {
      toast.error("Invalid username or password", {
        position:"top-right",
      });
      console.error('Invalid username or password');
    }
  }
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full relative'>
      <div className='bg-primary hidden sm:flex items-center justify-center relative overflow-hidden'>
        {/* <div className='slanted-background'></div> */}
        <ToastContainer/>
        <img className='w-150 h-150 m-8 object-cover absolute top-0 left-0' src={loginImg} alt="" />
        <div className='text-white text-7xl font-bold absolute' style={{ top: '12rem' }}>
          BASE
        </div>
        {/* Social Icons Container */}
        <div className="social-icons-container">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        </div>
      </div>

      <div className='bg-gray-100 flex flex-col rounded-md justify-center relative'>
        <div className='icon-text-container rounded-md p-4'>
          <form className='max-w-[500px] w-full mx-auto rounded-xl p-4 relative z-10'>
            <div className=''>
            <h2 className='text-4xl font-bold  text-left'>Sign In</h2>
            <h3 className='text-sm text-left'>Sign In to Your Account</h3>
            </div>
            
            <div className='flex w-full  justify-between py-8'>
              <p className='border bg-white rounded-xl p-2 shadow-lg hover:shadow-xl w-full relative flex items-center rounded-md m-2'><AiFillFacebook className='mr-2' />Sign In with Facebook</p>
              <p className='border bg-white rounded-xl p-2 shadow-lg hover:shadow-xl w-full relative flex items-center rounded-md m-2'><FcGoogle className='mr-2' /> Sign In with Google</p>
            </div>
            <div className='flex flex-col py-2'>
              <label>Username</label>
              <input className='border p-2 rounded-md' onChange={(e)=>setUsername(e.target.value)} type="text" />
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='border p-2 rounded-md' onChange={(e)=>setPassword(e.target.value)} type="password" />
            </div>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md' onClick={(e)=>handleSubmit(e)}>Sign In</button>
            <div className='flex justify-between'>
              <p className='flex items-center'>
                <input className='mr-2' type="checkbox" /> Remember Me
              </p>
              <p>Create an account</p>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}
