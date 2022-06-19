import React from 'react'
import styled from 'styled-components'

const Section = ({ children }) => <SectionBlock>{children}</SectionBlock>
const SectionBlock = styled.section`
  position: relative;
  overflow: hidden;
`
export default Section
