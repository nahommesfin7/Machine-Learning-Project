import React, { useState, useEffect } from "react";
import axios from "axios";

const ServiceInputForm = () => {
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [weather, setWeather] = useState("");
  const [output, setOutput] = useState(null);
  const [duration, setDuration] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Get the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
        },
        (error) => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  // Handle start ride
  const handleStartRide = () => {
    const start = new Date().toISOString();
    setStartTime(start);
    setDuration(0);

    // Start the duration counter
    const id = setInterval(() => {
      setDuration((prevDuration) => prevDuration + 1);
    }, 1000);

    setIntervalId(id);
  };

  // Handle end ride
  const handleEndRide = async () => {
    clearInterval(intervalId);

    const end = new Date().toISOString();
    setEndTime(end);

    // Convert the duration from seconds to minutes
    const durationInMinutes = Math.round(duration / 60);

    const data = {
      location,
      startTime,
      endTime: end,
      weather,
      duration: durationInMinutes, // Send the duration in minutes
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/process",
        data
      );
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error sending data to the server: ", error);
    }
  };

  // Format the duration to hh:mm:ss
  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200">
      <div className="bg-gray-500 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Service Details
        </h2>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Weather Conditions
          </label>
          <input
            type="text"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            placeholder="e.g., sunny, rainy"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <button
            onClick={handleStartRide}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold mb-3"
          >
            Start Ride
          </button>

          <button
            onClick={handleEndRide}
            className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-200 font-semibold"
          >
            End Ride
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Duration
          </label>
          <div className="w-full p-3 border rounded-lg bg-white text-center text-black">
            {formatDuration(duration)}
          </div>
        </div>

        {output && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-400 rounded-lg">
            <strong>Output:</strong> {output} birr
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceInputForm;
