import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h2>Grandpa here </h2>
      <p>Has money: {money}</p>

      <MoneyContext.Provider value={[money,setMoney]}>

        <RingContext.Provider value="golden ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>

      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
// The steps of using context api
// 1. Create a context and export it
// 2. Create a provider and pass a value
// 3. use useContext to receive the value
