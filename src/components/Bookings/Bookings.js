import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>
            
           { console.log(data)
               setBookings(data)});
    }, [loggedInUser.email])
    return (
        <div>
            <h3> You have {bookings.length} bookings</h3>
            {
                bookings.map((booking)=> <li>{booking.email} has booked for {new Date(booking.checkIn).toDateString('dd/MM/yyyy')} to {new Date(booking.checkOut).toDateString('dd/MM/yyyy')}</li>)
            }
        </div>
    );
};

export default Bookings;