import React, { useState, useEffect } from "react";
import api from "../api";

function Settings() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [currFilter, setCurrFilter] = useState("fridge_id");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("/settings"); // Update to your profile endpoint
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };

    fetchSettings();
  }, []);

  // Get data headers for table and filtering
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  // Handles change of selected column to filter
  const handleFilterColChange = (e) => {
    setCurrFilter(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return headers.some((header) => {
      // case-insensitive matching
      return String(item[header]).toLowerCase().includes(filter.toLowerCase());
    });
  });

  return (
    <div>
      <h1>Fridge Settings</h1>
      <div>
        <label htmlFor="column-select">Select Column:</label>
        <select
          id="column-select"
          value={currFilter}
          onChange={handleFilterColChange}
        >
          {/* Add options to filter by all headers */}
          {headers.map((header) => (
            <option key={header} value={header}>
              {header}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="filter">Filter:</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by any column"
        />
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{item[header]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Settings;
