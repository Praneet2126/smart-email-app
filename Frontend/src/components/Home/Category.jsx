import "./Category.css";

function Category({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-container">
      <div className="category-tabs">
        <button 
          className={`category-tab ${selectedCategory === "Personal" ? "active" : ""}`}
          onClick={() => onCategoryChange("Personal")}
        >
          Personal
        </button>
        <button 
          className={`category-tab ${selectedCategory === "Promotional" ? "active" : ""}`}
          onClick={() => onCategoryChange("Promotional")}
        >
          Promotions
        </button>
        <button 
          className={`category-tab ${selectedCategory === "Spam" ? "active" : ""}`}
          onClick={() => onCategoryChange("Spam")}
        >
          Spam
        </button>
        <button 
          className={`category-tab ${selectedCategory === "Work" ? "active" : ""}`}
          onClick={() => onCategoryChange("Work")}
        >
          Work
        </button>
      </div>
    </div>
  );
}

export default Category;
