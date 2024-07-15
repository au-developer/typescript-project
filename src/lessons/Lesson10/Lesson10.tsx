import SearchForm from "components/SearchForm/SearchForm";
import { Lesson_10Wrapper } from "./styles";

function Lesson10() {
  return <Lesson_10Wrapper>
<SearchForm/>
  </Lesson_10Wrapper>;
}

export default Lesson10;



// 1. Разместите на странице Input с label="Country", в который пользователь может ввести название страны
// 2. Разместите на странице Button "Get Universities", по клику на которую, отправляется GET запрос на http://universities.hipolabs.com/search?country=COUNTRY
// 3. Используйте для запросов axios
// 4. Если в ответе на запрос пришли нормальные данные(запрос выполнен успешно), то разместите данные в стейте, а затем отобразите на стрнице в виде каточек
// Сохраняйте не более 15 обьектов в массиве
// 5. При повторном нажатии на кнопку, выполните новый GET запрос на http://universities.hipolabs.com/search?country=COUNTRY и  получите новые данные, и обновите стейт
// 6. При получении ошибки, положите в отдельные стейт данные об ошибке с соббщением "Some Network Error"
// 7. Стили на ваше усмотрение, контент тоже на ваше усмотрение
// 8. Все нужно делать в компоненте Lesson_10

