import "./styles.css";
import { v4 } from "uuid";
import { ReactNode } from "react";
import {Car} from "./types" 

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
      <div key={v4()} className="card">
        {/* <div  key={Math.random()}className="card"> */}
        <p>Brand: {value.brand}</p>
        <p>Price: {value.price}$</p>
        <p>Fuel type: {value.isDiesel ? "diesel" : "another fuel"}</p>
      </div>
    );
  });

  return <div className="page-wrapper">{carList}</div>;
}

export default Homework06;
