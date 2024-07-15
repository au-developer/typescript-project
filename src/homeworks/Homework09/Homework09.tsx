import { useEffect, useState } from "react";

import axios from "axios";
import Button from "components/Button/Button";

import { Homework09Wrapper, Text, Card, ContainerJokes } from "./styles";
import { json } from "stream/consumers";

function Homework09() {
  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  // функция getJokes работающая с  fetch()
  const [joke, setJoke] = useState<string | undefined>(undefined); //
  const [error, setError] = useState<string | undefined>(undefined);

  // const getJokes = async () => {
  // setJoke(undefined); setError(undefined);
  //   const response = await fetch(RANDOM_JOKE_URL); // Response обьект
  //   console.log(response); // вывод в консоль Response обьект

  //   const result = await response.json(); // вытащит из ответа Response обьект
  //   console.log(result);

  //   if (response.ok) {
  //     // Тут пишем логику по работе с успешно пришедшими данными
  //     setJoke(`${result.setup} ${result.punchline}`);
  //   } else {
  //     // Тут пишем логику по работе с ошибкой
  //     setError("Ошибка при получении данных");
  //   }
  // };
  //useEffect(()=>{ getJokes();}, []); // функция для первичного Рендеринга, если удалить 2 аргумент - будет бесконечный вызов кол бекк!!!

  const getJokes = async () => {
    setJoke(undefined);
    setError(undefined);
    try {
      const responce = await axios.get(RANDOM_JOKE_URL);
      console.log(responce.data);
      setJoke(`${responce.data.setup} ${responce.data.punchline}`);
    } catch (error: any) {
      // обработка успешных данных
      console.log(error.message);
      setError("Ошибка при получении данных");
    } finally {
      // отлов ошибки
    } // выполнение действий не зависящих от результата запроса
  };

  useEffect(() => {
    getJokes();
  }, []);

  console.log(axios);
  return (
    <Homework09Wrapper>
      <Card>
        <ContainerJokes>
          {joke && <Text>{joke}</Text>}
          {error && <Text>{error}</Text>}
        </ContainerJokes>
        <Button name="Get some new joke" onClick={getJokes} />
      </Card>
    </Homework09Wrapper>
  );
}

export default Homework09;
