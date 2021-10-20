import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const AppContext = React.createContext()

export const useAppContext = () => {
    return useContext(AppContext)
}

const AppContextProvider = ({ children }) => {
    let token
    const [authenticated, setAuthenticated] = React.useState(false)
    const [generalAppLoading, setGeneralAppLoading] = React.useState(false)
    const [logedCustomer, setLogedCustomer] = React.useState({})
    const [customerRecordings, setCustomerRecordings] = React.useState([])
    const [mostRecentRecording, setMostRecentRecording] = React.useState({})
    const [initialRecording, setInitialRecording] = React.useState({})

    // console.log(customerRecordings)
    // console.log(mostRecentRecording)
    // console.log(initialRecording)

    const isObjectEmpty = (o) => {
        return Object.keys(o).length === 0
    }

    const getCustomerRecordings = () => {
        axios.get('/users/recordings')
            .then(res => {
                if (res.status === 200 && res.data.recordings.length > 0) {
                    setCustomerRecordings(res.data.recordings)
                    getMostRecentAndInitialRecording()
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const getMe = React.useCallback(() => {
        axios.get('/users/me')
            .then(res => {
                if (res.status === 200) {
                    setLogedCustomer({
                        ...res.data.me,
                        fullName: `${res.data.me.firstName} ${res.data.me.lastName}`
                    })
                }
            }).catch(err => {
                console.log(err.response)
            })
    }, [])

    const getMostRecentAndInitialRecording = () => {
        axios.get('/users/record')
            .then(res => {
                if (res.status === 200) {
                    setMostRecentRecording(res.data.mostRecentRecording)
                    setInitialRecording(res.data.initialRecording)
                }
            }).catch(err => {
                console.log(err.response)
            })
    }

    const logout = React.useCallback(async () => {
        setGeneralAppLoading(true)
        await AsyncStorage.removeItem('token')

        setTimeout(() => {
            setAuthenticated(false)
            setGeneralAppLoading(false)
        }, 2000)
    }, [])

    const checkForToken = React.useCallback(async () => {
        token = await AsyncStorage.getItem('token')
        if (!token) return

        if (token) {
            const decodedToken = jwtDecode(token)

            if (new Date(decodedToken.exp) * 1000 < new Date()) {
                logout()
            }

            setAuthenticated(true)
            axios.defaults.headers.common['Authorization'] = token
            getMe()
            getCustomerRecordings()
        }
    }, [logout, setAuthenticated, getMe, token])

    const value = {
        authenticated,
        logedCustomer,
        setLogedCustomer,
        setAuthenticated,
        generalAppLoading,
        setGeneralAppLoading,
        logout,
        checkForToken,
        mostRecentRecording,
        setMostRecentRecording,
        initialRecording,
        setInitialRecording
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
