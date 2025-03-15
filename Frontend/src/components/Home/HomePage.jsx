import React from "react";
import { useState } from 'react';
import HomeNavbar from "./HomeNavbar";
import SearchBar from "./SearchBar";
import Category from "./Category";
import EmailList from "./emaillist";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Primary");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <HomeNavbar />
      <SearchBar />
      <Category 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <EmailList selectedCategory={selectedCategory} />
    </>
  );
}

export default HomePage;
