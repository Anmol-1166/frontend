import { useFormik } from 'formik';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Blog = () => {
    const blogForm = useFormik({
        initialValues: {
            title : "",
            description : "",
            image :"",
            content :""
        },
        onSubmit: async (values) => {
            console.log(values);

            // write code to submit to server
            const res = await fetch('http://localhost:5000/blog/addblog',{
                method: 'POST',
                body: JSON.stringify(values),
                headers:{
                    'Contain-Type' : 'application/JSON'
                }
            });

            console.log(res.status);

            if(res.status === 200){
                Swal.fire({
                  icon : 'success',
                  title : 'WellDone!',
                  text : 'Registered Successfully 😎'
                })
              }else{
                Swal.fire({
                  icon : 'success',
                  title : 'WellDone!',
                  text : 'Registered Successfully'
                })
            }
        }
    })


  return (
    <div>
        <div className='w-25'>
            <div className='card'>
              <div className='card-header'>
                  <h3 className='text-center' >Blog</h3>
              </div>
              <div className='card-body'>
                  <form onSubmit={blogForm.handleSubmit} >

                    <label htmlFor="">Title</label>
                    <input type="text" className='form-control mb-3' name="title" onChange={blogForm.handleChange} value={blogForm.values.title} />

                    <label htmlFor="">Description</label>
                    <input type="text" className='form-control mb-3' name='description' onChange={blogForm.handleChange} value={blogForm.values.description} />

                    <label htmlFor="">Image</label>
                    <input type="file" className='form-control mb-3' name='image' onChange={blogForm.handleChange} value={blogForm.values.image} />

                    <label htmlFor="">Content</label>
                    <input type="text" className='form-control mb-3' name="content" onChange={blogForm.handleChange} value={blogForm.values.content}/>

                    <button className='btn btn-primary mt-5 w-100'>Submit</button>

                  </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;