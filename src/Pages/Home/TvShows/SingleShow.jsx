import React from 'react';
import { Link } from 'react-router-dom';

const SingleShow = ({shows}) => {
// console.log(shows.show);
const {show} = shows;
// console.log(show);


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={show.image.medium} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">Name: {show.name}</h2>
    <p className='text-xl font-semibold'>averageRuntime: {show.averageRuntime} Hours</p>
    <p className='text-xl font-semibold'>Type: {show.type}</p>
    <p className='text-xl font-semibold'>language: {show.language}</p>
    <p className='text-xl font-semibold'>schedule: {show.schedule.days[0] || 'Friday'} </p>
   <p className='text-xl font-semibold'>Rating: {show.rating.average || 'Not Available'}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/booking/${show.id}`}>Book Now</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleShow;