import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../commponents/GoogleLogin';
import toast from 'react-hot-toast';

const Login = () => {
    const {userSignIn}=useContext(AuthContext)
  const [error,setError]=useState({})
    const location=useLocation()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        // console.log(email,password)

        userSignIn(email,password)
        .then(result=>{
            alert('Successfully Login!')
            toast.success('Successfully Login!')
            navigate("/")
            // navigate( location ?.state ? location?.state : '/')
            
           
        })
        .catch(err=>{
           
          setError({...error, login:err.message})
        })
    }
    return (
        <div className='pt-32 text-center'>
             <div className="min-h-screen flex justify-center items-center">
      
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.login && <label className="label text-red-600">{error.login}</label>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <br />
        <GoogleLogin></GoogleLogin>
        <p className="text-center font-semibold">
          Don't have an account ?{" "}
          <Link className="text-red-600" to="/Signup">
            Register
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Login;