import { useEffect, useState } from "react"
import "./Time.css"

const Time = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString())

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      clearInterval(timeID)
    }
  }, [])

  return (
    <div className="time__container">
      <div className="time__content">{time}</div>
    </div>
  )
}

export default Time
