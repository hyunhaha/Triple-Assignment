import React from 'react'
import styled from 'styled-components'
import { awardData, countUpLines, mainLogo } from '../../util/lines'
import AwardSection from './AwardSection/AwardSection'
import CountingSection from './CountingSection/CountingSection'
import LogoSection from './LogoSection'

const AppIntroduce = (props) => {
  return (
    <AppIntroduceBlock>
      <LogoSection duration={700} delay={100} data={mainLogo} />
      <CountingSection duration={700} delay={200} sentences={countUpLines} />
      <AwardSection duration={700} delay={300} awardData={awardData} />
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
