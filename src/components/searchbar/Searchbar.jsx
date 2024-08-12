import React from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    history(`/search?name=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Searchbar;