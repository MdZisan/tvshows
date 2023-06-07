import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleShow from './SingleShow';

const TvShows = () => {

    const [shows,setShows]= useState();

    const TvShows= useLoaderData()
// console.log(TvShows);
    return (
        <div>
           <h2 className='text-2xl font-bold text-center'>Total TvShow : {TvShows.length} </h2>
           <div className='px-6 py-2 space-y-6'>
            {
                TvShows.map(show=><SingleShow key={show.show.id} shows={show} ></SingleShow>)
            }
           </div>
        </div>
    );
};

export default TvShows;