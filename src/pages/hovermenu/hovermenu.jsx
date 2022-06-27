import React from 'react'
import styled from "styled-components"




const Side = styled.div`
    max-width: 1920px;
    width: 100vw;
    height: 25em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: fixed;
    top: ${props => props.props.open ? "0%" : "-100%"};
    background-color: white;
    transition: all 1s;
    z-index: 10;
`;


const HoverMenu = (props) => {

    return(
        <Side onMouseLeave={() => props.setOpenHoverMenu(!props.openHoverMenu)} props={{open:props.openHoverMenu}}>
            <props.hover setHoverMenuOpen={props.setHoverMenuOpen} open={props.openHoverMenu}/>
        </Side>
        )
}


export default HoverMenu;