import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-6ac84-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupTemp = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupTemp.push(meetup)
        }

        setIsLoading(false);
        setMeetups(meetupTemp);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups!</h1>
      {isLoading ? <h3>Loading...</h3> : <MeetupList meetups={meetups} />}
    </section>
  );
}

export default AllMeetupsPage;
