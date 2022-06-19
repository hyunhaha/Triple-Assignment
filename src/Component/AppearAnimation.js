import { useEffect, useState } from 'react'
import styled from 'styled-components'

const AppearAnimation = ({ children, duration, delay }) => {
  const [opacity, setOpacity] = useState(0)
  const [transY, setTransY] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
      setTransY(1)
    }, 0)
  }, [])
  return (
    <AppearBlock
      opacity={opacity}
      transY={transY}
      duration={duration}
      delay={delay}
    >
      {children}
    </AppearBlock>
  )
}
const AppearBlock = styled.div`
  opacity: ${(props) => (props.opacity ? '1' : '0')};
  transform: translateY(${(props) => (props.transY ? '0px' : '10px')});
  transition: all ${(props) => props.duration}ms ease-in-out
    ${(props) => props.delay}ms;
`
export default AppearAnimation
