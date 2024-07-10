
import { v4 } from "uuid";
import { ReactNode } from "react";

import {Car} from "./types" 
import {PageWrapper, CardWrapper} from "./styles";

function Homework06() {


  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList: ReactNode = cars.map((value: Car) => { // ReactNode - типизация массива обьектов

    return (
      <CardWrapper key={v4()}>
        {/* <div  key={Math.random()}className="card"> */}
        <p>Brand: {value.brand}</p>
        <p>Price: {value.price}$</p>
        <p>Fuel type: {value.isDiesel ? "diesel" : "another fuel"}</p>
      </CardWrapper>
    );
  });

  return <PageWrapper>{carList}</PageWrapper>;
}

export default Homework06;
