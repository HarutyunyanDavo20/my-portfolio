import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Time.scss";

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timeID);
    };
  }, []);

  return (
    <div className="time__container">
      <div className="time__content">{time}</div>
    </div>
  );
};

export default Time;
