import { Stack } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'
import Rightbar from '../Components/Rightbar'



const home = () => {
    return (
        <>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between" >
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
        </>
    )
}

export default home