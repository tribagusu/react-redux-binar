import React, { Component } from "react"
import { useSelector, connect } from "react-redux"

// const CardName = () => {
//   const { data } = useSelector((state) => state)

//   return (
//     <div>
//       <h1>{data.name}</h1>
//     </div>
//   )
// }

// export default CardName

class CardName extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        <h1>{data.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps)(CardName)
