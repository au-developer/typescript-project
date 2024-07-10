// Создайте функцию, которая бы принимала бы следующие параметры:
//   код погоды и функция decode, которая дает расшифровку погоды по коду.
//   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
//   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
//   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
//   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
//   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
//   одном из методов switch-case:
import { useState } from "react";

import Button from "components/Button/Button";
import Counter from "components/Counter/Counter";

import "./styles.css";
import { WEATHER_CODES } from "./types";



function Lesson07() {
  // -------------------------------------------------------------------------------------ENUM

  // !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props


  const decode = (weatherCode: WEATHER_CODES): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км) ";
      }
      default:
        return "This code doesnt exist";
    }
  };
  const showWeather = (
    weatherCode: WEATHER_CODES,
    decodeFunc: (weatherCode: WEATHER_CODES) => string
  ) => {
    console.log(decodeFunc(weatherCode));
  };

  showWeather(WEATHER_CODES.FC, decode);
  showWeather(WEATHER_CODES.BR, decode);
  showWeather(WEATHER_CODES.FC, decode);

  // -----------------------------------------------------GENERIC
  type ArrayGenerator<ValueType> = ValueType[];
  const someStringsArrray: string[] = ["a", "b", "c"];
  const someStringsArrray2: ArrayGenerator<string> = ["a", "b", "c"];
  const number: ArrayGenerator<number> = [1, 2, 3, 4];

  interface ValueForMac {
    model: string;
    articul: number;
  }

  // Можно прокидывать не только 1 дженерик аргумент, а сколько угодно через запятую
  interface ShopItems<ValueType> {
    type: string;
    value: ValueType;
  }

  const item1: ShopItems<number> = {
    type: "TV",
    value: 1235346245,
  };

  const item2: ShopItems<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };
  const item3: ShopItems<ValueForMac> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 1231241352345,
    },
  };
///////////////////////////////////////////////////////////////Контроль Родителем состояния дочерненго компонета 

const [count, setCount] = useState<number>(0);
const onPlus = (): void => {
  setCount((prevValue: number) => {
    return prevValue + 1;
  });
};

const onMinus = (): void => {
  setCount((prevValue: number) => {
    return prevValue - 1;
  });
};

const sentCountToServer = async()=>{
//Иммитация запроса - не работает!!!
//тут нам нужно отправить запрос на сервер со значением count
//  const response = await fetch("someURL", {
//       method: "POST",
//       body: JSON.stringify({ count: count }),
//     };
};

  return (
    <div className="page-wrapper">
     <Counter count={count} onPlus={onPlus} onMinus={onMinus} /> 
     <Button name="Send count" onClick={sentCountToServer} />
        
    </div>
  );
}
export default Lesson07;