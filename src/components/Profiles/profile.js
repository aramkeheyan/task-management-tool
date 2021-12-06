import React from 'react'
import StickyFooter from '../../containers/footer'
import Create from '../../modals/Create'
import Navbar from '../navbar'
// import Avatar from "./Avatar"
import ProfileData from "./ProfileData"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ImageUploader from './ImageUpload';
// import { height } from '@mui/system'


export default function Profile() {

    return (
        <>
            <Navbar />
            <Create />
            <br></br>
            <Container maxWidth="md">
                {/* <Avatar/> */}
                <ImageUploader/>
            <br></br>
            <br></br>
            <TextareaAutosize
                aria-label="maximum height"
                minRows={5}
                maxRows={55}
                placeholder="About me"
                style={{ width: 400, height: 150}}
                // defaultValue={aboutMe.map((about) => about.description)}
            />
            <br></br>
            <br></br>
                <ProfileData />
            <br></br>
                <Button variant="outlined">Save changes</Button>
            </Container>
            <StickyFooter />
        </>
    )
}

