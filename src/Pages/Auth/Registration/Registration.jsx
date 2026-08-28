import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth.jsx';
import SocialLogin from '../SocialLogin/SocialLogin.jsx';
import axios from "axios";
import { AuthContext } from '../../../AuthProvider/AuthProvider.jsx';
const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)

    const { createEmailUser, uodateUserProfile, emailVerfication } = UseAuth(AuthContext);
    const { register, formState: { errors }, handleSubmit,  } = useForm()
    const onSubmit = (data) => {
        // console.log(data);
        // console.log(data.photo[0]);
        const profileImg = data.photo[0];
        createEmailUser(data.email, data.password)
            .then(result => {
                console.log(result);

                // stord the file image form data 
                const formData = new FormData();
                formData.append('image', profileImg);
                // send the photo store and post imgbb 
                const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_host}`
                axios.post(url, formData)
                    .then(res => {
                        console.log('after upload imag', res);

                        // send the update user profile to firebase 
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }

                        uodateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile update');
                                emailVerfication()
                                    .then(() => {
                                        // email verficatin 
                                        // const checkVerification = setInterval(async () => {
                                        //     try {
                                        //         await result.user.reload();
                                        //         console.log('Email verified:', result.user.emailVerified);
                                        //         if (result.user.emailVerified) {
                                        //             clearInterval(checkVerification);
                                        //             alert('Email verified successfully!'); navigate(location.state || '/');
                                        //         }
                                        //     }
                                        //     catch (error) { clearInterval(checkVerification); console.log(error); }
                                        // }, 3000);
                                    })
                                .catch(error=>console.log(error))
                                // navigate(location.state || '/')
                            })
                            .catch(error => {
                            console.log(error)
                        })
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mt-10 w-full mx-auto max-w-sm'>
            <h1 className='text-3xl font-bold text-black'>Welcome Back</h1>
            <h3 className='font-semibold my-4'>Connect with ZapShift</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="input" placeholder="your name" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>name is required</p>}

                    
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>email is required</p>}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: 'Password is Required', minLength: 6 })} className="input" placeholder="Password" />

                    {errors.password?.type === 'required' && <p className='text-red-500'>password reqire</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>at leadst 6 charatier</p>}

                    <label className="label">Photo</label>
                    <input type="file" {...register('photo',{required:true})} className="file-input file-input-ghost" />
                    {errors.photo?.type === 'required' && <p className='text-red-500'>phot is required</p>}

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4 w-80">Register</button>
                </fieldset>
            </form>
            <p className='font-semibold mt-4'>Already have an accound please <Link className='text-blue-500' to='/login' state={location.state}>Log in</Link></p>
        
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;