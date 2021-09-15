import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import axios from "axios";
import { useHistory } from "react-router";


function NewMeetup() {
    const history=useHistory();

  const addMeetupHandler = (meetupData) => {
    axios
      .post(
        "https://react-refresh-33212-default-rtdb.firebaseio.com/meetups.json",
        JSON.stringify(meetupData)
      )
      .then((message) => history.replace('/'))
      .catch((error) => alert("There seems to be some issue accessing the server! Please try again later"));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
