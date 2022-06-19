import React from 'react'
import styled from 'styled-components'

const Store = ({ data }) => {
  return (
    <StoreBlock link={data.image}>
      {data.text[0]}
      <br />
      {data.text[1]}
    </StoreBlock>
  )
}
const StoreBlock = styled.li`
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.link});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
`
export default Store
