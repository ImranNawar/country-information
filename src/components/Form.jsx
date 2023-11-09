// Import necessary modules
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  // State to store the entered country name and retrieved country data
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);

  // Function to handle the form submission and fetch country data
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Make a GET request to the API based on the entered country name
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      // Set the retrieved country data in the state
      setCountryData(response.data[0]);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  // Display the form and retrieved country data
  return (
    <form onSubmit={handleSearch}>
      <div className="m-6">
        <label htmlFor="countryName" className="block text-gray-900 text-2xl pl-3">
          Enter the country name:
        </label>
        <div className="ml-10 flex">
          <input
            type="text"
            name="countryName"
            id="countryName"
            autoComplete="countryName"
            className="m-2 p-1 border-2 border-teal-400 focus:outline-none bg-transparent placeholder:text-gray-400 rounded-md w-80"
            placeholder="Search..."
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display country information if available */}
      {countryData && (
        <div className="m-6 p-4 border border-gray-400 rounded-md">
          <h2 className="text-3xl font-semibold mb-4">{countryData.name.common}</h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Display various country information */}
            <div>
              <p>
                <span className="font-bold pr-4">Official Name:</span> {countryData.name.official}
              </p>
              <p>
                <span className="font-bold pr-4">Capital:</span> {countryData.capital[0]}
              </p>
              <p>
                <span className="font-bold pr-4">Population:</span> {countryData.population}
              </p>
              <p>
                <span className="font-bold pr-4">Region:</span> {countryData.region} ({countryData.subregion})
              </p>
              <p>
                <span className="font-bold pr-4">Languages:</span> {Object.values(countryData.languages).join(', ')}
              </p>
              <p>
                <span className="font-bold pr-4">Timezone:</span> {countryData.timezones[0]}
              </p>
              <p>
                <span className="font-bold pr-4">Area:</span> {countryData.area} square kilometers
              </p>
              <p>
                <span className="font-bold pr-4">Currencies:</span> {Object.values(countryData.currencies).map((currency) => (
                  <span key={currency.name}>{currency.name} ({currency.symbol})</span>
                ))}
              </p>
            </div>

            <div>
              {/* Display the country flag */}
              <img
                src={countryData.flags.svg}
                alt={`Flag of ${countryData.name.common}`}
                className="w-40 h-27 object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;