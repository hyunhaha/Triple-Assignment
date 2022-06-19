import { css } from 'styled-components'

export const AppearAnimationStyle = css`
  opacity: ${(props) => (props.opacity ? '1' : '0')};
  transform: translateY(${(props) => (props.transY ? '0' : '10')}px);
  transition: all ${(props) => props.duration}ms ease-in-out
    ${(props) => props.delay}ms;
`
