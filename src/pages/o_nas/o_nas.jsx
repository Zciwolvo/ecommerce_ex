import React, {useState} from 'react'
import styled from "styled-components"
import Navbar from '../components/navbar';
import MainSegment from './main';
import Grid from './grid'
import AboutBanner from './Banner';
import Contact from '../components/contact';
import Footer from '../components/footer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;







const O_nas = () => {

    const [open, setOpen] = useState(false)
    const [openHoverMenu, setOpenHoverMenu] = useState(false)

    return(
        <Container>
            <Navbar open={open} setOpen={setOpen} openHoverMenu={openHoverMenu} setOpenHoverMenu={setOpenHoverMenu}/>
            <MainSegment/>
            <Grid/>
            <AboutBanner/>
            <Contact/>
            <Footer/>
        </Container>
    )
}

export default O_nas;