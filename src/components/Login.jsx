import React from 'react'
import { useId } from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    //*to use the recaptcha we need to create a site key from google recaptcha and paste it here
    //*to create a site key go to https://www.google.com/recaptcha/admin/create and create a new site key
    const SITE_KEY = "6LePMDMrAAAAAPeMv3gXAlbml1vkTX6UczIbETaM"
    const navigate = useNavigate();
    const uniqId = useId();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        reCaptchaVerified: false
    })
    const [err, setErr] = useState({
        email: "",
        password: "",
        ReCAPTCHA: ''
    });
    //*to handle the input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    //*to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        // if (formData.email != 'admin@gmail.com') return;
        // if (formData.password != 'admin') return;
        // if (!formData.reCaptchaVerified) return;
        //     console.log("Form submitted successfully", formData)


        let validationErrors = {
            email: '', password: '', ReCAPTCHA: ''
        }

        if (formData.email === '') {
            validationErrors.email = 'Please enter your email.';
        } else if (formData.email !== 'admin@gmail.com') {
            validationErrors.email = 'Invalid email'

        }

        if (formData.password === '') {
            validationErrors.password = 'Please enter your password'
        } else if (formData.password !== 'admin') {
            validationErrors.password = 'Invalid password'
        }
        if (!formData.reCaptchaVerified) {
            validationErrors.reCaptchaVerified = 'Please verify the reCptcha'
        }
        if (validationErrors.email || validationErrors.password) {
            setErr(validationErrors)
            return
        }
        navigate('/dashboard')
        //Redirect to the dashboard page
    }
    //*to handle the recaptcha verification
    const handleRecaptchaChange = (value) => {
        // console.log("Captcha value:", value);
        //const isVerifed=value ? true : false
        setFormData({ ...formData, reCaptchaVerified: !!value });
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            <form action="" className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3' onSubmit={handleSubmit}>
                <h1 className='text-4xl text-center my-10 font-bold'>Login Form</h1>
                <div className='mb-4 flex flex-col gap-2'>
                    <label htmlFor="">Enter Email</label>
                    <input type="email" placeholder="Email" name='email' id={`${uniqId} email`} className='border border-gray-300 p-2 rounded outline-0' onChange={handleChange} value={formData.email} />
                    {err.email && <p className='text-red-500'>{err.email}</p>}
                </div>
                <div className='mb-4 flex flex-col gap-2'>
                    <label htmlFor="">Enter Password</label>
                    <input type="password" placeholder="Password" name='password' id={`${uniqId} password`} className='border border-gray-300 p-2 rounded outline-0' onChange={handleChange} value={formData.password} />
                    {err.password && <p className='text-red-500'>{err.password}</p>}
                </div>
                <div className='my-4'>
                    <ReCAPTCHA sitekey={SITE_KEY} onChange={handleRecaptchaChange} />

                </div>
                <div className='mb-4 my-5 '>

                    <button type='submit' className='bg-blue-400 text-white px-7 py-2 rounded ml-35 font-bold cursor-pointer hover:bg-blue-500'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login