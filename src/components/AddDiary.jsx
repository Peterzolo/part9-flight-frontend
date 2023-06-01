import React, { useState } from "react";
import { createDiary } from "./api"; // Assuming you have an API module for making HTTP requests

const AddDiary = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newDiaryEntry = {
        date,
        weather,
        visibility,
        comment,
      };

      // Call the API function to create a diary entry
      const createdEntry = await createDiary(newDiaryEntry);

      // Do something with the created diary entry, e.g., show a success message
      console.log("Created Diary Entry:", createdEntry);

      // Reset the form fields
      setDate("");
      setWeather("");
      setVisibility("");
      setComment("");
    } catch (error) {
      // Handle error
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h1>Add Diary</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="weather">Weather:</label>
          <div>
            <input
              type="radio"
              id="sunny"
              name="weather"
              value="sunny"
              checked={weather === "sunny"}
              onChange={() => setWeather("sunny")}
              required
            />
            <label htmlFor="sunny">Sunny</label>
          </div>
          <div>
            <input
              type="radio"
              id="rainy"
              name="weather"
              value="rainy"
              checked={weather === "rainy"}
              onChange={() => setWeather("rainy")}
              required
            />
            <label htmlFor="rainy">Rainy</label>
          </div>
          <div>
            <input
              type="radio"
              id="cloudy"
              name="weather"
              value="cloudy"
              checked={weather === "cloudy"}
              onChange={() => setWeather("cloudy")}
              required
            />
            <label htmlFor="cloudy">Cloudy</label>
          </div>
          <div>
            <input
              type="radio"
              id="stormy"
              name="weather"
              value="stormy"
              checked={weather === "stormy"}
              onChange={() => setWeather("stormy")}
              required
            />
            <label htmlFor="stormy">Stormy</label>
          </div>
          <div>
            <input
              type="radio"
              id="windy"
              name="weather"
              value="windy"
              checked={weather === "windy"}
              onChange={() => setWeather("windy")}
              required
            />
            <label htmlFor="windy">Windy</label>
          </div>
        </div>
        <div>
          <label htmlFor="visibility">Visibility:</label>
          <div>
            <input
              type="radio"
              id="great"
              name="visibility"
              value="great"
              checked={visibility === "great"}
              onChange={() => setVisibility("great")}
              required
            />
            <label htmlFor="great">Great</label>
          </div>
          <div>
            <input
              type="radio"
              id="good"
              name="visibility"
              value="good"
              checked={visibility === "good"}
              onChange={() => setVisibility("good")}
              required
            />
            <label htmlFor="good">Good</label>
          </div>
          <div>
            <input
              type="radio"
              id="ok"
              name="visibility"
              value="ok"
              checked={visibility === "ok"}
              onChange={() => setVisibility("ok")}
              required
            />
            <label htmlFor="ok">OK</label>
          </div>
          <div>
            <input
              type="radio"
              id="poor"
              name="visibility"
              value="poor"
              checked={visibility === "poor"}
              onChange={() => setVisibility("poor")}
              required
            />
            <label htmlFor="poor">Poor</label>
          </div>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Diary Entry</button>
      </form>
    </div>
  );
};

export default AddDiary;
