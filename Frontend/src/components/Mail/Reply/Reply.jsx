import './Reply.css';

function Reply({ onClose }) {
  return (
    <div className="reply-container">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>AI Generated Reply</h2>
      <div className="reply-content">
        <div className="email-header">
          <p><strong>To:</strong> <span className="recipient">recipient@email.com</span></p>
          <p><strong>Subject:</strong> <span className="subject">Re: Your Recent Email</span></p>
        </div>
        <div className="email-body">
          <p>Dear [Name],</p>
          <p>Thank you for your email. I appreciate you taking the time to reach out.</p>
          <p>I have reviewed your request and would like to confirm that I will be able to assist you with this matter. I will work on this and get back to you with more details soon.</p>
          <p>Please let me know if you need any additional information from my end.</p>
          <p>Best regards,<br/>[Your name]</p>
        </div>
        <div className="reply-actions">
          <button className="action-btn send">Send</button>
          <button className="action-btn edit">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Reply;