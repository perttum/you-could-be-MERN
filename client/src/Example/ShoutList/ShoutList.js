import React from 'react'

const ShoutList = ({ shouts }) => {
  
  const displayShouts = shouts && shouts.map(s => {
    return <p>
      { s.shout }
    </p>
  })
  
  return(
    <div>
      <h2>Shouts:</h2>
      { displayShouts && displayShouts }
    </div>
  )
}

export default ShoutList