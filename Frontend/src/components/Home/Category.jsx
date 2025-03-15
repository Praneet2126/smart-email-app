import "./Category.css";

function Category({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-container">
      <div className="category-tabs">
        <button 
          className={`category-tab ${selectedCategory === "Primary" ? "active" : ""}`}
          onClick={() => onCategoryChange("Primary")}
        >
          Primary
        </button>
        <button 
          className={`category-tab ${selectedCategory === "Promotional" ? "active" : ""}`}
          onClick={() => onCategoryChange("Promotional")}
        >
          Promotions
        </button>
        <button 
          className={`category-tab ${selectedCategory === "Social" ? "active" : ""}`}
          onClick={() => onCategoryChange("Social")}
        >
          Social
        </button>
      </div>
    </div>
  );
}

export default Category;
