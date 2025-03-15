import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import HomeNavbar from "../Home/HomeNavbar";
import Features from "./features";
import MailContent from "./MailContent";
import emailData from "../../data/emails.json";
import AIButtons from "./AIButtons";

function MailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMail, setSelectedMail] = useState(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    const mail = emailData.find((email) => email.id === parseInt(id));
    if (!mail) {
      navigate("/");
      return;
    }
    setSelectedMail(mail);
  }, [id, navigate]);

  const handleSummaryShow = () => {
    setTimeout(() => {
      summaryRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <HomeNavbar />
      <div className="mail-page">
        <Features />
        <MailContent mail={selectedMail} />
      </div>

      <div ref={summaryRef}>
        <AIButtons onSummaryShow={handleSummaryShow} />
      </div>
    </>
  );
}

export default MailPage;
