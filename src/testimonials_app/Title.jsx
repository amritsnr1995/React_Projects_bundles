import React from 'react'

const Title = ({text}) => {
  return (
    <section>
        <h1>{!text?"Default props showing":text}</h1>
    </section>
  )
}

export default Title