import React from 'react'
import styled from 'styled-components'
import { pasingToWord } from '../../../../util/utilFun'
import CountUp from './CountUp'

const CountingLine = ({ sentence }) => {
  const [count, unit, last] = pasingToWord(sentence)

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
const CountingLineBlock = styled.li`
  color: ${(props) => props.theme.color.gray1};
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  strong {
    font-weight: bold;
  }
`
export default CountingLine
