import { useState } from "react";
import "./App.css";
import WheatherCard from "./Component/WhetherCard";
function App() {
  // https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=23559c932351a9cf0c7af68f5e12d92e&units=metric

  return (
    <>
      <WheatherCard />
    </>
  );
}

export default App;
