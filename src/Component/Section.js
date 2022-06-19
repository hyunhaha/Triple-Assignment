import React from 'react'
import styled from 'styled-components'

const Section = ({ children }) => <SectionBlock>{children}</SectionBlock>

const SectionBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export default Section
