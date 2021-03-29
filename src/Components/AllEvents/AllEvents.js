import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    fetch("https://mighty-meadow-00530.herokuapp.com/allEvents")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);
  console.log(allEvents);
  return (
    <div>
      <h3>Running Events</h3>
      <div className="d-flex">
        {allEvents.map((singleEvent) => (
          <EventCard singleEvent={singleEvent}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
