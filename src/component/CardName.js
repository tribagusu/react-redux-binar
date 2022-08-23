import React from "react"
import { useSelector } from "react-redux"

const CardName = () => {
  const reduxData = useSelector((state) => state)
  // console.log("  🔸-> reduxData", reduxData.auth)
  return (
    <div>
      <h1>{reduxData.auth.name}</h1>
    </div>
  )
}

export default CardName
