import React from 'react'
import styled from 'styled-components'
import { countUpLines } from '../../util/countUpLines'
import AwardSection from './AwardSection'
import CountingSection from './CountingSection/CountingSection'
import LogoSection from './LogoSection'

const AppIntroduce = (props) => {
  return (
    <AppIntroduceBlock>
      <LogoSection duration={700} delay={100} />
      <CountingSection duration={700} delay={200} sentences={countUpLines} />
      <AwardSection duration={700} delay={300} />
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
