import React from 'react';

const EventCard = (props) => {
    const {eventTitle,eventDescription,eventImageUrl} = props.singleEvent;
    console.log(eventTitle,eventDescription,eventImageUrl)
    return (
        <div className="w-25 m-2 border p-3  rounded" >
            <img className='w-100' src={eventImageUrl} alt="img"/>
            <h2>{eventTitle}</h2>
            <h6>eventDescription</h6>
        </div>
    );
};

export default EventCard;