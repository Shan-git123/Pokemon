import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Pokemon_home = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get( `https://pokeapi.co/api/v2/pokemon-species/${num}` );

      console.log(res);
      // setNum(()=>{


      // });
      setName(res.data.name);
      setMoves(res.data.color.name);
    }
    getData();
  });

  return (
    <>
      <h1>You choose {num} value</h1>
      <h1>My name is {name}</h1>
      <h1>I have {moves} color</h1>

      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div id="img" className="poki_img">
      </div>
    </>
  );
};

export default Pokemon_home;
