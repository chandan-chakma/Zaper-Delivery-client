import React from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router';
const Login = () => {
    const { register, formState: { errors }, handleSubmit,  } = useForm()
    const onSubmit =(data)=>console.log(data)
    return (
        <div>
            <h1>Log in</h1>
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
        </div>
    );
};

export default Login;