import React, { useState } from 'react'

import { Header } from './partials/Header'
import { SiteRouter } from './router'
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AuthProvider } from './helpers/LoginContext'

// #131516

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
})

function App() {
    const [mode, setMode] = useState('dark')
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    )

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    //@ts-ignore
                    mode,
                },
            }),
        [mode],
    )

    return (
        <ThemeProvider theme={theme}>
            <ColorModeContext.Provider value={colorMode}>
                <CssBaseline />
                <div>
                    <AuthProvider>
                        <div>
                            <Header />
                            <Container>
                                <SiteRouter />
                            </Container>
                        </div>
                    </AuthProvider>
                </div>
            </ColorModeContext.Provider>
        </ThemeProvider>
    )
}

export default App
