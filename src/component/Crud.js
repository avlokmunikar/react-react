import { useFormik, validateYupSchema } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Textarea, Select, Option, Checkbox, Radio } from '@material-tailwind/react';
import { isVal } from '../utils/Validation';



const Crud = () => {
  const valSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    // username: Yup.string().min(5, 'too short').max(20, 'max character').required(),
    // msg: Yup.string().min(10, 'too short').max(100, 'too long'), country: Yup.string().required(),
    // program: Yup.array().min(1, 'content require').required(),
    // gender: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      msg: '',
      country: '',
      program: [],
      gender: '',
      Image: '',
      imageUrl: '',
    },
    onSubmit: (val, resetForm) => {
      console.log(val);
      // resetForm();

    },
    validationSchema: valSchema
  });


  const checkData = [
    { label: 'java', color: 'green', value: 'java' },
    { label: 'python', color: 'blue', value: 'python' },
    { label: 'c++', color: 'yellow', value: 'c++' },
    { label: 'node', color: 'pink', value: 'node' },
  ];


  const radioData = [
    { label: 'male', color: 'purple', value: 'male' },
    { label: 'female', color: 'red', value: 'female' },
    { label: 'other', color: 'beige', value: 'other' }
  ];

  return (
    <div className='p-5'>
      <form onSubmit={formik.handleSubmit} className='max-w-xl p-6 space-y-4 shadow-2xl '>
        <div className='space-y-2'>




          <div>
            <label htmlFor="email">Email</label>
          </div>

          <input type="email" placeholder='email' id='email' name='email' className='outline-none border border-black px-2 py-1 rounded-md' onChange={formik.handleChange} value={formik.values.email} />

          {isVal(formik) ? <h1>{formik.errors.email}</h1> : null}
        </div>





        <div>
          <div>
            <label htmlFor="username">Username</label>
          </div>

          <input type="username" placeholder='username' id='username' name='username' className='outline-none border border-black px-2 py-1 rounded-md' onChange={formik.handleChange} value={formik.values.username} />
          {formik.errors.username && formik.touched.username ? <h1>{formik.errors.username}</h1> : null}
        </div>






        <div className="w-72">
          <Select label="Select Your Country" name='country'
            error={formik.errors.country && formik.touched.country ? true : false}
            onChange={(e) => formik.setFieldValue('country', e)}>
            <Option value='nepal'>nepal</Option>
            <Option value='china'>china</Option>
            <Option value='india'>india</Option>
            <Option value='pakistan'>pakistan</Option>
            <Option value='usa'>usa</Option>
          </Select>

          {formik.errors.country && formik.touched.country ? <h1>{formik.errors.country}</h1> : null}
        </div>





        <div className='space-y-2'>
          <label htmlFor="message" >Your Message</label>
          <Textarea label="message" id='message' name='msg' value={formik.values.msg} onChange={formik.handleChange} />
        </div>





        <div className="flex w-max gap-4">
          {checkData.map((d) => {
            return <Checkbox color={d.color} key={d.color} value={d.value} label={d.label} onChange={formik.handleChange} name='program' />;
          })}
        </div>


        <div className="flex-gap-10">
          {radioData.map((d) => {
            return <Radio color={d.color} key={d.color} value={d.value} label={d.label} onChange={formik.handleChange} name='gender' />;
          })}
        </div>

        <div className='space-y-2'>
          <label className='block' htmlFor="image">Select Image</label>
          <input
            type="file"
            name='image'
            id='image'
            accept='image/*'
            onChange={(e) => {
              console.log(e.target.files);
              const file = e.target.files[0];
              formik.setFieldValue('image', file);

              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.addEventListener('load', () => {
                formik.setFieldValue('imageUrl', reader.result);
                console.log(reader.result);
              });
            }}
          />
          {formik.values.imageUrl && <img className='h-[200px] my-4' src={formik.values.imageUrl} alt="" />}

        </div>


        <button type='submit' className='bg-red-500 px-20 py-1'>Submit</button>



      </form>
    </div>
  )
}

export default Crud