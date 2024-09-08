import React, { useState } from 'react';

const AdminComponent = () => {
  const [duration, setDuration] = useState('');
  const [forecastImg, setForecastImg] = useState('');
  const [heatmapImg, setHeatmapImg] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the input data to the forecast API
      const response = await fetch('http://localhost:5001/api/forecast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: duration }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const forecastBlob = await response.blob();
      setForecastImg(URL.createObjectURL(forecastBlob));

      // Fetch the heatmap plot
      const heatmapResponse = await fetch('http://localhost:5001/api/heatmap');

      if (!heatmapResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const heatmapBlob = await heatmapResponse.blob();
      setHeatmapImg(URL.createObjectURL(heatmapBlob));

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="p-16  mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-700">Admin Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block ">
            Forecast Duration (hours):
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              min="1"
            />
          </label>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      <div className='grid grid-cols-2 w-full'>

      {forecastImg && (
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Forecast Plot:</h2>
          <img src={forecastImg} alt="Forecast Plot" className="mt-4" />
        </div>
      )}
      {heatmapImg && (
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Heatmap Plot:</h2>
          <img src={heatmapImg} alt="Heatmap Plot" className="mt-4" />
        </div>
      )}
      {/* {error && <div className="text-red-500">{error}</div>}   */}
      </div>
    </div>
  );
};

export default AdminComponent;
