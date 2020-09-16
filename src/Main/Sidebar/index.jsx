import React from 'react'
import Styled from './styled'

const Sidebar = ({ children }) => (
  <Styled.Wrapper>
    {children}
  </Styled.Wrapper>
)

const Item = ({ children }) => (
  <Styled.Item>
    {children}
  </Styled.Item>
)

Sidebar.Item = Item

export default Sidebar