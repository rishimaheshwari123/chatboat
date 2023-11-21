import { createChatBotMessage } from "react-chatbot-kit";
import GotItButton from "../components/GotItButton";
import Slot from "../components/Slot";
import Exit from "../components/Exit";
import AskAge from "../components/AskAge";

const config = {
  botName: "helping Bot",
  initialMessages: [
    createChatBotMessage("Hello Welcome To The Student Info System", {
      widget: "GotItButton",
    }),
  ],
  widgets: [
    {
      widgetName: "GotItButton",
      widgetFunc: (props) => <GotItButton {...props} />,
    },
    {
      widgetName: "slots",
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: "askage",
      widgetFunc: (props) => <AskAge {...props} />,
    },
    {
      widgetName: "exit",
      widgetFunc: (props) => <Exit {...props} />,
    },
  ],
};

export default config;
