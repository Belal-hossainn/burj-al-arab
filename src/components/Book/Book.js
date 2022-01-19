import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  KeyboardDatePicker, MuiPickersUtilsProvider
} from '@material-ui/pickers';
import 'date-fns';
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Bookings from '../Bookings/Bookings';
import './Book.css';

const Book = () => {
    const {bedType} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });
    const handleCheckInDate= (date) => {
      const newDate = {...selectedDate};
      newDate.checkIn =date;
      setSelectedDate(newDate);
    };

    const handleCheckOutDate = (date)=> {
        const newDate = {...selectedDate};
        newDate.checkOut = date;
        setSelectedDate(newDate)
    };
    
    const handleBooking = ()=> {
        const userInfo = {
            name: loggedInUser.displayName,
            email: loggedInUser.email
        }
        const newBooking = {...userInfo,...selectedDate};
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => setSelectedDate(data));
        
    }
   
    return (
      <div style={{ textAlign: "center" }}>
        <h1>
          {" "}
          Hello, {loggedInUser.email} Let's book a {bedType} Room.
        </h1>
        <p>
          Want a <Link to="/home">different room?</Link>{" "}
        </p>
        <div className="book-container">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              direction="column"
              spacing={3}
              justifyContent="center"
              alignItems="center"
              container
            >
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Check In"
                value={selectedDate.checkIn}
                onChange={handleCheckInDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Check Out"
                format="MM/dd/yyyy"
                value={selectedDate.checkOut}
                onChange={handleCheckOutDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
        <Button style={{ marginTop: "20px", marginBottom: "20px" }}  variant="contained" color="primary" onClick={handleBooking}>
          Book Now
        </Button>
        <Bookings/>
      </div>
    );
};

export default Book;