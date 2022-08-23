import React from "react"
import { useSelector } from "react-redux"

const CardImage = () => {
  const reduxData = useSelector((state) => state)

  return (
    <div>
      <img src={reduxData.auth.avatar} alt="" />
    </div>
  )
}

export default CardImage
