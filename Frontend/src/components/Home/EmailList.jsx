import "./EmailList.css";
import { FaGithub, FaStar, FaTrash } from "react-icons/fa";
import emailData from "../../data/emails.json";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function EmailList({ selectedCategory = "Primary" }) {
  const [filteredEmails, setFilteredEmails] = useState([]);

  useEffect(() => {
    const filtered = emailData.filter(
      (email) => email.category === selectedCategory
    );
    setFilteredEmails(filtered);
  }, [selectedCategory]);

  const handleDelete = (emailId) => {
    setFilteredEmails((prevEmails) =>
      prevEmails.filter((email) => email.id !== emailId)
    );
  };

  const navigate = useNavigate();

  const handleEmailClick = (emailId) => {
    navigate(`/mail/${emailId}`);
  };

  return (
    <motion.div
      className="email-list-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="popLayout">
        {filteredEmails.map((email, index) => (
          <motion.div
            key={email.id}
            className="email-item"
            onClick={() => handleEmailClick(email.id)}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -100,
              transition: { duration: 0.2 },
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            layout
          >
            <div className="email-left">
              <motion.div className="sender-avatar" whileHover={{ scale: 1.1 }}>
                <FaGithub className="avatar-icon" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#ffd700" }}>
                <FaStar className="star-icon" />
              </motion.div>
              <div className="sender-info">
                <span className="sender-name">{email.name}</span>
                <span className="sender-email">{email.sender}</span>
              </div>
            </div>
            <div className="email-content">
              <h3 className="email-subject">{email.subject}</h3>
              <p>{email.body}</p>
              <span className="email-timestamp">
                {new Date(email.timestamp).toLocaleString()}
              </span>
            </div>
            <motion.button
              className="delete-btn"
              onClick={() => handleDelete(email.id)}
              whileHover={{ scale: 1.2, color: "#ff3b3b" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTrash />
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default EmailList;
