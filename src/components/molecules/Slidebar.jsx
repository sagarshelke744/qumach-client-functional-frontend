import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SlidebarData } from './SlidebarData'
import Slidemenu from './Slidemenu'

const Nav = styled.div`
    background-color: #1e1d1d;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 1.6rem;
    color: white;
    /* margin-top: 3rem; */
`
const SlidebarNav = styled.nav`
    background-color: #343232;
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`
const SlidebarWrap = styled.nav`
    width: 100%;
`
const IconStyle = styled.nav`
    margin-left: 8%;
    margin-top: -6%;
`

function Slidebar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const Autoclose = () => console.log("hello")
  return (
    <>
    <Nav>
        <NavIcon>
            <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
    </Nav>
    <SlidebarNav sidebar={sidebar}>
        <SlidebarWrap>
            <NavIcon>
                <IconStyle>
                <AiIcons.AiOutlineClose onClick={showSidebar} /></IconStyle>
            </NavIcon>
           {SlidebarData.map((item, index) => {
            return <Slidemenu item={item} key={index} onClick={Autoclose}/>
           })}
        </SlidebarWrap>
    </SlidebarNav>
    </>
  )
}

export default Slidebar