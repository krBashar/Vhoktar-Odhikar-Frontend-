import { useState } from 'react';
import React from "react";
import { useRouter } from 'next/router'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({


    fullname :  yup.string().required("Full name required").min(8, "Full name must be at least 8 characters"),
    email : yup.string().email().required("Email required").matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
    password : yup.string().required("Password is required")
              .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?& ])[A-Za-z\d@$!%*?& ]{7,}$/,
                "Password must be 7 characters with uppercase, digit and special character."),
    confirmPassword : yup.string().required("Confirm the Password").oneOf([yup.ref("password")], "Passwords must be same"),
    phone :   yup.string().required("Phone Number required").min(11).max(11),
    license : yup.mixed()
              .test("filePresence", "You need to provide License file", (value) => value && value.length > 0)
              .test("fileSize", "This file is too large", (value) => !value || (value && value[0] && value[0].size <= 200000))
              .test("fileType", "Invalid file type. Only PDF and DOC are allowed", (value) => {
                if (!value || !value[0]) {
                  return true;
                }
  
                const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                return allowedTypes.includes(value[0].type);
               }),
    role :    yup.string().required("Select a Role"),
    region :  yup.string().required("Select a Region").min(4, "Region must be at least 4 characters").max(20, "Region cannot exceed 20 characters"),

})





export default function RegistrationPage () {

    const router = useRouter();

    const submitForm = (data) => {
        console.log(data);
        router.push("log");
    }

    const {register, handleSubmit, formState: {errors} } = useForm({

        resolver : yupResolver(schema),
    }); 

    console.log(errors);

    return (
    <>
         
          <h1>Registration Form</h1>
          <br/>
          <form onSubmit={handleSubmit(submitForm)}>

            <div>
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullname" 
                placeholder='Full Name..' 
                {...register('fullname')} />
            </div>
           <p>{errors && errors.fullname?.message }</p>   

           <br/>

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
              <label>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder='Comfirm Password..' 
                {...register('confirmPassword')} />
            </div>
            <p>{errors && errors.confirmPassword?.message }</p>

            <br/>

            <div>
              <label>Phone</label>
              <input 
                type="string" 
                name="phone" 
                placeholder='Phone Number' 
                {...register('phone')} />
            </div>
            
            <p>{errors && errors.phone?.message }</p>
            <br/>
            <div>
              <label>License</label>
              <input 
                type="file" 
                name="license" 
                {...register('license')} />
            </div>
            <p>{errors && errors.license?.message }</p>

            <br/>

            <div>
              <label>Role</label>
              <select name="role" {...register('role')}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="industry">Industry</option>
                <option value="distributor">Distribuotor</option>
                <option value="user">User</option>
             </select>
            </div>
            <p>{errors && errors.role?.message}</p>

            <br />

            <div>
              <label>Region</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="dhaka"
                    {...register('region')}
                  />  
                   Dhaka
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="chittagong"
                      {...register('region')}
                   />
                   Chittagong
                 </label>
              </div>
           </div>
          <p>{errors && errors.region?.message}</p>

            <br />

          <div>
            <input type="submit" id="submit" />
          </div>
          </form>

        </>
        
      );

}