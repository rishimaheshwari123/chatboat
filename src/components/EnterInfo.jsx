import { useNavigate } from "react-router-dom";
import "../App.css";
const EnterInfo = () => {
  const navigate = useNavigate();
  const showChatBot = () => {
    navigate("/chat");
  };
  return (
    <div className="info">
      <div className="heading">WELCOME TO STUDENT INTO SYSTEM</div>
      <button className="enroll_button" onClick={() => showChatBot()}>
        Enroll Now
      </button>
    </div>
  );
};

export default EnterInfo;
