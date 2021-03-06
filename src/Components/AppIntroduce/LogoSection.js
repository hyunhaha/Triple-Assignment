import React from 'react'
import styled from 'styled-components'
import useAppear from '../../hooks/useAppear'
import { AppearAnimationStyle } from '../../styles/commons/AppearAnimationStyle'

const LogoSection = ({ duration, delay, data }) => {
  const [opacity, transY] = useAppear()

  return (
    <LogoSectionBlock
      opacity={opacity}
      transY={transY}
      duration={duration}
      delay={delay}
      image={data.image}
    >
      {data.text}
    </LogoSectionBlock>
  )
}
const LogoSectionBlock = styled.div`
  ${AppearAnimationStyle}
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: ${(props) => props.theme.color.gray3}; ;
`
export default LogoSection
