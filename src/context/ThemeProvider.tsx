import React, {
    createContext,
    FC,
    ReactElement,
    useCallback,
    useContext,
    useState,
} from 'react'
import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
    useMediaQuery,
} from '@mui/material'

export type Mode = 'light' | 'dark'
export interface IThemeContext {
    isLight: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({
    isLight: true,
    toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

const light = createTheme({
    palette: {
        mode: 'light',
    },
})

const dark = createTheme({
    palette: {
        mode: 'dark',
    },
})

export const ThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
    const baseTheme = useMediaQuery('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light'
    const [theme, setTheme] = useState<Mode>(
        (localStorage.getItem('theme') as Mode) || baseTheme
    )
    const isLight = theme === 'light'
    const toggleTheme = useCallback(() => {
        setTheme((state) => {
            localStorage.setItem('theme', state === 'light' ? 'dark' : 'light')
            return state === 'light' ? 'dark' : 'light'
        })
    }, [])
    return (
        <ThemeContext.Provider
            value={{
                isLight,
                toggleTheme,
            }}
        >
            <MuiThemeProvider theme={isLight ? light : dark}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}