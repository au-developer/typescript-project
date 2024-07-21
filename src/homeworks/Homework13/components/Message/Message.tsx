import  {BlockManagementContext} from "homeworks/Homework13/components/BlogManagement/BlogManagement"
import { useContext } from "react";
import { PageWrapper, Title, Text } from "./styles";

function Message() {

const message = useContext<string>(BlockManagementContext);


  return <PageWrapper>
<Title>Пост</Title>
<Text>{message}</Text>
  </PageWrapper>;
}

export default Message;
