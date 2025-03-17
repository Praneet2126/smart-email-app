import React from "react";
import { useState, useEffect } from 'react';
import HomeNavbar from "./HomeNavbar";
import SearchBar from "./searchbar";
import Category from "./category";
import EmailList from "./emaillist";
import emailData from "../../data/emails.json";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Primary");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmails, setFilteredEmails] = useState(emailData);
  const [allEmails, setAllEmails] = useState(emailData);

  useEffect(() => {
    const filtered = allEmails.filter(email => {
      const matchesCategory = email.category === selectedCategory;
      const matchesSearch = searchQuery.toLowerCase().trim() === "" ? true :
        email.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
    setFilteredEmails(filtered);
  }, [searchQuery, selectedCategory, allEmails]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleDelete = (id) => {
    setAllEmails(prevEmails => prevEmails.filter(email => email.id !== id));
  };

  return (
    <>
      <HomeNavbar />
      <SearchBar onSearch={handleSearch} value={searchQuery} />
      <Category 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <EmailList 
        selectedCategory={selectedCategory}
        emails={filteredEmails}
        onDelete={handleDelete}
      />
    </>
  );
}

export default HomePage;
