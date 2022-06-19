import React from 'react'
import styled from 'styled-components'
import useAppear from '../../hooks/useAppear'
import { AppearAnimationStyle } from '../../styles/commons/AppearAnimationStyle'

const LogoSection = ({ duration, delay }) => {
  const [opacity, transY] = useAppear()

  return (
    <>
      <LogoSectionBlock
        opacity={opacity}
        transY={transY}
        duration={duration}
        delay={delay}
      >
        2021년 12월 기준
      </LogoSectionBlock>
    </>
  )
}
const LogoSectionBlock = styled(AppearAnimationStyle)`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(images/triple2x.png);
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`
export default LogoSection
