import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('toke'));
  }, []);

  const { handleSubmit, register, reset } = useForm();

  const submit = async data => {
   await useAuth('/users/login', data);
    reset({
      email: '',
      password: '',
    })
    setToken(true);

  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(localStorage.getItem('token'));
  }

  return (
    <>
      {
        token ?
          <button onClick={handleLogout}>Logout</button>
          :
          <div className='container'>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <label htmlFor='email'>Email</label>
                <input {...register('email')} id='email' type='email' />
              </div>
              <div>
                <label htmlFor='password'>password</label>
                <input {...register('password')} id='password' type='password' />
              </div>
              <button>login</button>
            </form>
            <p>if you are not register yet, <Link to='/register'>register here</Link></p>
          </div>
      }
    </>
  )
}

export default Login;
