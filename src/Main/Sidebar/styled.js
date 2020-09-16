import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  left: 30px;
  width: 200px;
  height: 90%;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin: auto 0;
  background: #ccc;
  z-index: 9999;
  padding: 8px;
`

const Item = styled.div`
  border: 1px solid ${props => props.color};
  border-radius: 50px;
  padding: 10px;
  margin: 8px 0;
  cursor: pointer;
`

export default {
  Wrapper,
  Item,
}