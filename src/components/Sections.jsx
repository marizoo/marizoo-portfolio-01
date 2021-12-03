import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    position: relative;
    bottom: 0px;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    &::webkit-scrollbar {
      display: none;
    }
    overflow-x: hidden;

    /* > * {
      width: 100vw;
      height: calc(100vh - 70px);
      scroll-snap-align: start;
    } */
  
`

const Sections = ({children}) => {
    return (
        <Cont>
            {children}
        </Cont>
    )
}


export default Sections
