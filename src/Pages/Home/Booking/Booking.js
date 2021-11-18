import React from "react";
import { useParams } from "react-router";
import AddService from "./AddBooking/AddService";

const Booking = () => {
  const { bookingId } = useParams();
  return (
    <div>
      <h1 className="mt-5 bg-dark p-5 text-center mx-auto text-white">
        {bookingId}
      </h1>
      <AddService></AddService>
    </div>
  );
};

export default Booking;
