import './Summary.css';

function Summary({ onClose }) {
  return (
    <div className="summary-container">
      <button className="close-btn flex justify-center items-center" onClick={onClose}><span><i class="fa-solid fa-xmark"></i></span></button>
      <h2>Email Summary</h2>
      <p>
        This email discusses a new GitHub repository fork. Key points:
        - Main repository has been forked successfully
        - Changes have been implemented in the development branch
        - Pull request is ready for review
        - Testing has been completed with all tests passing
      </p>
    </div>
  );
}

export default Summary;