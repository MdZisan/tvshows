import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import TvShows from "../Pages/Home/TvShows/TvShows";
import BookingForm from "../Pages/Booking/BookingForm";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/',
            element:<TvShows></TvShows>,
            loader:()=> fetch('https://api.tvmaze.com/search/shows?q=all')
        },{
            path:'booking/:id',
            element:<BookingForm></BookingForm>,
            loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
        }
      ]
    },
  ]);

export default Routes;