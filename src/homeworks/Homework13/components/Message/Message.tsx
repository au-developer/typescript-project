import  {BlockManagementContext} from "homeworks/Homework13/components/BlogManagement/BlogManagement"
import { useContext } from "react";
import { MessageWrapper, MessageTitle, MessageText } from "./styles";

function Message() {

const message = useContext<string>(BlockManagementContext);


  return <MessageWrapper>
<MessageTitle>Message:</MessageTitle>
<MessageText>{message}</MessageText>
  </MessageWrapper>;
}

export default Message;
