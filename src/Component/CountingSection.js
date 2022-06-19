import React from 'react'
import styled from 'styled-components'
import useAppear from '../hooks/useAppear'
import useCountUp from '../hooks/useCountUp'
import { AppearAnimationStyle } from '../styles/commons/AppearAnimationStyle'
import AppearAnimation from './AppearAnimation'

const CountingSection = ({ duration, delay }) => {
  const count = useCountUp(700)
  const count1 = useCountUp(100)
  const count2 = useCountUp(670)

  const [opacity, transY] = useAppear()
  return (
    <CountingSectionBlock
      opacity={opacity}
      transY={transY}
      duration={duration}
      delay={delay}
    >
      <div>{count}만 명의 여행자</div>
      <div>{count1}만 개의 여행 리뷰</div>
      <div>{count2}만 개의 여행 일정</div>
    </CountingSectionBlock>
  )
}
const CountingSectionBlock = styled(AppearAnimationStyle)`
  margin-left: 623px;
  padding-top: 150px;
`
export default CountingSection
