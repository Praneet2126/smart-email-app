import "./EmailList.css";
import { FaGithub, FaStar, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EmailList() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      const credentials = btoa(`${email}:${password}`);

      const response = await fetch(
        "http://localhost:8080/email-app/api/emails/get-inbox",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${credentials}`,
          },
        }
      );

      if (response.status === 401) {
        throw new Error("Unauthorized: Please login again");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch emails");
      }

      const data = await response.json();
      console.log("Raw data from server:", data);

      // Ensure we're setting an array to the emails state
      const emailArray = Array.isArray(data) ? data : data.emails || [];
      setEmails(emailArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching emails:", error);
      setError(error.message);
      setLoading(false);

      if (error.message === "Unauthorized: Please login again") {
        navigate("/login");
      }
    }
  };

  const handleEmailClick = (id) => {
    const selectedEmail = emails.find(email => email.id === id);
    navigate(`/mail/${id}`, {
      state: { email: selectedEmail }
    });
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <motion.div
      className="email-list-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading && <div className="loading">Loading emails...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <AnimatePresence mode="popLayout">
          {Array.isArray(emails) && emails.length > 0 ? (
            emails.map((email, index) => (
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
                  <motion.div
                    className="sender-avatar"
                    whileHover={{ scale: 1.1 }}
                  >
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
                  onClick={(e) => handleDelete(e, email.id)}
                  whileHover={{ scale: 1.2, color: "#ff3b3b" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTrash />
                </motion.button>
              </motion.div>
            ))
          ) : (
            <div className="no-emails">No emails found</div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default EmailList;
