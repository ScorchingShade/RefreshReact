import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import axios from "axios";

function NewMeetup() {
  const addMeetupHandler = (meetupData) => {
    axios
      .post(
        "https://react-refresh-33212-default-rtdb.firebaseio.com/meetups.json",
        JSON.stringify(meetupData)
      )
      .then((message) => console.log(message))
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
