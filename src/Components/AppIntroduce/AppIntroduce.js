import React from 'react'
import styled from 'styled-components'
import { awardLines, countUpLines } from '../../util/lines'
import AwardSection from './AwardSection/AwardSection'
import CountingSection from './CountingSection/CountingSection'
import LogoSection from './LogoSection'

const AppIntroduce = (props) => {
  return (
    <AppIntroduceBlock>
      <LogoSection duration={700} delay={100} />
      <CountingSection duration={700} delay={200} sentences={countUpLines} />
      <AwardSection duration={700} delay={300} awardLines={awardLines} />
    </AppIntroduceBlock>
  )
}
const AppIntroduceBlock = styled.div`
  min-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  position: relative;
`
export default AppIntroduce
