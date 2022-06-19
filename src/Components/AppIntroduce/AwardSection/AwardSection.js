import React from 'react'
import styled from 'styled-components'
import useAppear from '../../../hooks/useAppear'
import { AppearAnimationStyle } from '../../../styles/commons/AppearAnimationStyle'
import Store from './Store'

const AwardSection = ({ duration, delay, awardData }) => {
  const [opacity, transY] = useAppear()

  return (
    <AwardSectionBlock
      opacity={opacity}
      transY={transY}
      duration={duration}
      delay={delay}
    >
      {awardData.map((data, idx) => (
        <Store key={idx} data={data} />
      ))}
    </AwardSectionBlock>
  )
}

const AwardSectionBlock = styled(AppearAnimationStyle)`
  margin: 50px 0px 140px 60%;
`
export default AwardSection
