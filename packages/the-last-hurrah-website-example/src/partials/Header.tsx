import React from 'react'
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
    Link,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import { ColorModeContext } from '../App'
import { useAuthDispatch, useAuthState } from '../helpers/LoginContext'

import { logOut } from '../helpers/Login'
import { IState } from '../helpers/reducer'

export const Header = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const colorMode = React.useContext(ColorModeContext)
    const dispatch = useAuthDispatch()
    const userDetails = useAuthState() as IState

    const logout = () => {
        //@ts-ignore
        logOut(dispatch)
        navigate('/login')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ paddingRight: '1rem' }}

                        // sx={{ flexGrow: 1 }}
                    >
                        <Link component={RouterLink} to="/">
                            Home
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link component={RouterLink} to="/blogs">
                            Blogs
                        </Link>
                    </Typography>
                    {userDetails.logged_in ? (
                        <Typography
                            variant="h6"
                            component="div"
                            style={{ paddingRight: '1rem' }}

                            // sx={{ flexGrow: 1 }}
                        >
                            <Button onClick={logout} color="inherit">
                                Logout
                            </Button>
                        </Typography>
                    ) : (
                        <Typography
                            variant="h6"
                            component="div"
                            style={{ paddingRight: '1rem' }}

                            // sx={{ flexGrow: 1 }}
                        >
                            <Link component={RouterLink} to="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                        </Typography>
                    )}

                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
