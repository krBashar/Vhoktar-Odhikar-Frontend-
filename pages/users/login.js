import { useState } from 'react';
import React from "react";
import { useRouter } from 'next/router'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({


    email : yup.string().email().required("Email is required"),
    password : yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must be 8 characters with uppercase, lowercase, digit and special character."),


})





export default function LoginPage () {

    const router = useRouter();

    const submitForm = (data) => {
        console.log(data);
      //  router.push("login");
      reset();
    }

    const {register, handleSubmit, formState: {errors}, reset, } = useForm({

        resolver : yupResolver(schema),
    }); 

    console.log(errors);

    return (
    <>
         
          <h1>Sign In</h1>
          <br/>
          <form onSubmit={handleSubmit(submitForm)}>

            <div>
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder='Email..' 
                {...register('email')} />
            </div>

           <p>{errors && errors.email?.message}</p>  
           <br/>
            <div>
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder='Password..' 
                {...register('password')} />
            </div>

            <p>{errors && errors.password?.message}</p>
            <br/>
            <div>
              <input type="submit" id="submit" />
            </div>
          </form>

        </>
        
      );

}