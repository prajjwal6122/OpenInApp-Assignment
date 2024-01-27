// Login.js

import React from 'react';
import loginImg from '../../lib/constants/Screenshot 2024-01-27 135720.png';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import './login.css';

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full relative'>
      <div className='bg-primary hidden sm:flex items-center justify-center relative overflow-hidden'>
        {/* <div className='slanted-background'></div> */}
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

      <div className='bg-gray-100 flex flex-col justify-center relative'>
        <div className='icon-text-container rounded-md p-4'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-4 relative z-10'>
            <h2 className='text-4xl font-bold text-left'>Sign In</h2>
            <h3 className='text-sm text-left'>Sign In to Your Account</h3>
            <div className='flex justify-between py-8'>
              <p className='border shadow-lg hover:shadow-xl relative flex items-center rounded-md p-2'><AiFillFacebook className='mr-2' />Sign In with Facebook</p>
              <p className='border shadow-lg hover:shadow-xl  relative flex items-center rounded-md p-2'><FcGoogle className='mr-2' /> Sign In with Google</p>
            </div>
            <div className='flex flex-col py-2'>
              <label>Username</label>
              <input className='border p-2 rounded-md' type="text" />
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='border p-2 rounded-md' type="password" />
            </div>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md'>Sign In</button>
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
