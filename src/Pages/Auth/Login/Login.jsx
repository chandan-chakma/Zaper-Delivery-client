import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../../AuthProvider/AuthProvider.jsx';
import SocialLogin from '../SocialLogin/SocialLogin.jsx';
const Login = () => {
    const { signInEmailUser } = useContext(AuthContext);
    const navigate= useNavigate()
    const { register, formState: { errors }, handleSubmit,  } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        signInEmailUser(data.email, data.password)
            .then(result => {
                console.log(result);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            });
    
    }
    return (
        <div className='w-full mx-auto max-w-sm'>
            <h1 className='text-3xl font-bold text-black my-4'>Log in</h1>
            <form onSubmit={ handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type==='required' &&<p className='text-red-500'>email is required</p>}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: 'Password is Required', minLength: 6 })} className="input" placeholder="Password" />
                   
                    {errors.password?.type === 'required' && <p className='text-red-500'>password reqire</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>at leadst 6 charatier</p>}

                    <div><a className="link link-hover">Forgot password?</a></div>
                
                    <button className="btn btn-neutral mt-4 w-80">Login</button>
                </fieldset>
            </form>
            <p className='font-semibold mt-4'>Do not have an accound please <Link className='text-blue-500' to='/registration'>Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;