
import React from 'react'
import StickyFooter from '../../containers/footer'
import Create from '../../modals/create'
import Navbar from '../navbar'
import Avatar from "../Profiles/Avatar"
import ProfileData from "./ProfileData"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Input } from '@mui/icons-material'

export default function Profile() {
    return (
        <>
            <Navbar />
            <Create />
            <Container maxWidth="md">
                <Avatar/>
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                     Change photo
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    </Button>
                </label>
            <br></br>
            <br></br>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                maxRows={5}
                placeholder="About me"
                style={{ width: 300 }}
            />
            <br></br>
            <br></br>
                <ProfileData />
            </Container>
            <StickyFooter />
        </>
    )
}

