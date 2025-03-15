import { FaReply, FaRobot } from 'react-icons/fa';
import { BiMessageAltDetail } from 'react-icons/bi';
import { StyledButtons } from './AIButtons.styles';
import { StarIcon } from './StarIcon';
import Summary from './Summary/Summary';
import { useState } from 'react';
import Reply from './Reply/Reply';

function AIButtons({ onSummaryShow }) {
  const [showSummary, setShowSummary] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const handleSummarize = () => {
    setShowSummary(true);
    onSummaryShow();
  };

  const handleAIReply = () => {
    setShowReply(true);
    onSummaryShow();
  };

  return (
    <>
      <StyledButtons>
        <button className="animated-btn">
          <FaReply />
          <span>Reply</span>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className={`star-${num}`}>
              <StarIcon />
            </div>
          ))}
        </button>

        <button className="animated-btn" onClick={handleSummarize}>
          <BiMessageAltDetail />
          <span>Summarize</span>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className={`star-${num}`}>
              <StarIcon />
            </div>
          ))}
        </button>

        <button className="animated-btn" onClick={handleAIReply}>
          <FaRobot />
          <span>AI Reply</span>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className={`star-${num}`}>
              <StarIcon />
            </div>
          ))}
        </button>
      </StyledButtons>

      {showSummary && <Summary onClose={() => setShowSummary(false)} />}
      {showReply && <Reply onClose={() => setShowReply(false)} />}
    </>
  );
}

export default AIButtons;
