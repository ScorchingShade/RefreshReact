import React, { useState,useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import axios from "axios";

function AllMeetups() {
//   const DUMMY_DATA = [
//     {
//       id: "m1",
//       title: "This is a first meetup",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//       address: "Meetupstreet 5, 12345 Meetup City",
//       description:
//         "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//     },
//     {
//       id: "m2",
//       title: "This is a second meetup",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//       address: "Meetupstreet 5, 12345 Meetup City",
//       description:
//         "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//     },
//   ];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(()=>{
      setIsLoading(true);
    axios
    .get("https://react-refresh-33212-default-rtdb.firebaseio.com/meetups.json")
    .then((message) => {
        const meetups=[];
        
        for( const key in message.data){
            console.log(key)
            const meetup={
                id:key,
                ...message.data[key]

            }
          console.log(meetup)
            meetups.push(meetup)
        }
        
        setIsLoading(false);
        setLoadedMeetups(meetups);
    })
    .catch((error) =>
      alert(
        "There seems to be some issue accessing the server! Please try again later"
      )
   
    );

  },[])

 
  return (
    <div>
        {isLoading?
            <section>
            <p>
                Loading...
            </p>
            </section>
        
        :
        <div>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
        </div>
        }
     
    </div>
  );
}

export default AllMeetups;
