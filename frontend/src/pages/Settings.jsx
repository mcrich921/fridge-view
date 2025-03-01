import React, { useState, useEffect } from "react";
import api from "../api";

function Settings() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("/settings"); // Update to your profile endpoint
        setData(response.data);
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };

    fetchSettings();
  }, []);

  return <div>Settings</div>;
}

export default Settings;
