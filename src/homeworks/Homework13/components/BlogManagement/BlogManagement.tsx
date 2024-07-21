import Button from "components/Button/Button";

import { useState, ChangeEvent, createContext } from "react";
import Card from "../Card/Card";
import {
  PageWrapper,
  TextAreaWrapper,
} from "homeworks/Homework13/components/BlogManagement/styles";

export const BlockManagementContext = createContext<string>("");

// Здесь postTextArea хранит текст из текстового поля, а message хранит
//отправленное сообщение. useState задает начальное состояние как пустую строку.
function BlogManagement() {
  const [postTextArea, addPost] = useState<string>(""); // состояние текстареи
  const [message, setMessage] = useState<string>(""); // состояние переданое из текстареа и положеное в хранилище

  // Функция onChangeText вызывается при изменении текста в текстовом поле и
  //обновляет состояние postTextArea значением из текстового поля.

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // отлов события
    addPost(event.target.value);
  };
  // Функция postMessage устанавливает значение message равным текущему тексту
  //из postTextArea, т.е. отправляет сообщение.

  const postMessage = () => {
    // отправка информации
    setMessage(postTextArea);
  };

  return (
    // BlockManagementContext.Provider: предоставляет значение message для всех компонентов внутри провайдера.
    <BlockManagementContext.Provider value={message}>
      {" "}
      //
      <PageWrapper>
        <TextAreaWrapper
          name="message"
          value={postTextArea}
          onChange={onChangeText}
          placeholder="Enter Text Here"
        />
        <Button name="Post" onClick={postMessage} />
        <Card />
      </PageWrapper>
    </BlockManagementContext.Provider>
  );
}

export default BlogManagement;
