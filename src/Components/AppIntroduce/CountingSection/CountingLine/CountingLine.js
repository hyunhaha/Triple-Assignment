import React from 'react'
import styled from 'styled-components'
import CountUp from './CountUp'

const CountingLine = ({ sentence }) => {
  const [count, unit, last] = sentence

  return (
    <CountingLineBlock>
      <strong>
        <CountUp target={count} />
        {unit}
      </strong>
      {last}
    </CountingLineBlock>
  )
}
const CountingLineBlock = styled.div`
  color: rgb(58, 58, 58);
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  strong {
    font-weight: bold;
  }
`
export default CountingLine