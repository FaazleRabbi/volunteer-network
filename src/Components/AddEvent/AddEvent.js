import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = (data) => {
      const eventData ={
          eventTitle:data.eventTitle,
          eventDescription:data.eventDescription,
          eventImageUrl :imageUrl
      }
      console.log(imageUrl)
      console.log(eventData)
      fetch('http://localhost:5000/addEvent',{
          method:'POST',
          headers:{"content-type":"application/json"},
          body:JSON.stringify(eventData)
      })
    }
  //react hoook form end
  //Images uploaded into imgbb
  const handleImg = (e) => {
    const imageData = new FormData();
    imageData.set("key", "d9df22459998db9719f423a928f646a7");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className=''
        name="eventTitle"
        type="text"
        placeholder="Title"
        ref={register({ required: true })}
      />
      {errors.eventTitle && <span>This field is required</span>}
      <br/>
      <input
        name="eventImageUrl"
        type="file"
        ref={register({ required: true })}
        onChange={handleImg}
      />
      {errors.eventImageUrl && <span>This field is required</span>}
      <br/>
      <input
        name="eventDescription"
        type="text"
        placeholder="Description"
        ref={register({ required: true })}
      />
      {errors.eventDescription && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default AddEvent;
