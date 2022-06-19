import React from 'react'
import styled from 'styled-components'
import useAppear from '../../../hooks/useAppear'
import { AppearAnimationStyle } from '../../../styles/commons/AppearAnimationStyle'
import CountingLine from './CountingLine/CountingLine'

const CountingSection = ({ duration, delay, sentences }) => {
  const [opacity, transY] = useAppear()
  return (
    <CountingSectionBlock
      opacity={opacity}
      transY={transY}
      duration={duration}
      delay={delay}
    >
      {sentences.map((sentence, idx) => (
        <CountingLine key={idx} sentence={sentence} />
      ))}
    </CountingSectionBlock>
  )
}
const CountingSectionBlock = styled(AppearAnimationStyle)`
  margin-left: 623px;
  padding-top: 150px;
`
export default CountingSection
