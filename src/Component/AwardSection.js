import React from 'react'
import styled from 'styled-components'
import useAppear from '../hooks/useAppear'
import { AppearAnimationStyle } from '../styles/commons/AppearAnimationStyle'

const AwardSection = ({ duration, delay }) => {
  const [opacity, transY] = useAppear()
  return (
    <AwardSectionBlock
      opacity={opacity}
      transY={transY}
      duration={duration}
      delay={delay}
    >
      <div>
        <div> 2018 구글 플레이 스토어</div>
        <div>올해의 앱 최우수상 수상</div>
      </div>
      <div>
        <div>2018 애플 앱스토어</div>
        <div>오늘의 여행앱 선정</div>
      </div>
    </AwardSectionBlock>
  )
}

const AwardSectionBlock = styled(AppearAnimationStyle)`
  margin: 50px 0px 140px 623px;
`
export default AwardSection
