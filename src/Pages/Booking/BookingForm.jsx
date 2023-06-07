import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const BookingForm = () => {
    const details =  useLoaderData();
    const userInfo =  JSON.parse(localStorage.getItem('userinfo'))
    
 
    // console.log(details);
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onChange = data =>{
        const userdata=  JSON.stringify(data)
        localStorage.setItem('userinfo',userdata)
        
    }
const onSubmit= data=>{
    alert(`${data.moviename} is booked`);
    localStorage.removeItem('userinfo')
    reset()
}

    return (
        <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
<img src={details.image.original} alt="" className='
md:w-1/2 h-1/2 rounded-2xl' />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChange)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Movie Name</span>
          </label>
          <input type="text"  value={details.name} {...register("moviename")}  placeholder="Movie Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={userInfo?.name} required {...register("name")}  placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={userInfo?.email} required {...register("email")}  placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="number" defaultValue={userInfo?.phone} required {...register("phone")}  placeholder="phone" className="input input-bordered" />
        </div>
       
        <div className="form-control mt-6">
        <input type="submit" value={'book Now'} className='btn btn-error text-white' />
        </div>
      </form>
    </div>
  </div>
</div>




          
        </div>
    );
};

export default BookingForm;