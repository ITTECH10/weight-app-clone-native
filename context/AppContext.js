import React, { useCallback, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const AppContext = React.createContext()

export const useAppContext = () => {
    return useContext(AppContext)
}

const AppContextProvider = ({ children }) => {
    const [token, setToken] = React.useState()
    const [authenticated, setAuthenticated] = React.useState(false)
    const [generalAppLoading, setGeneralAppLoading] = React.useState(false)
    const [logedCustomer, setLogedCustomer] = React.useState({})
    const [customerRecordings, setCustomerRecordings] = React.useState([])
    const [mostRecentRecording, setMostRecentRecording] = React.useState({})
    const [initialRecording, setInitialRecording] = React.useState({})
    const [weeklyChartRecords, setWeeklyChartRecords] = React.useState([])
    const [monthlyChartRecords, setMonthlyChartRecords] = React.useState([])

    const getMontlyChartRecords = React.useCallback(() => {
        axios.get('/users/recordings/monthly')
            .then(res => {
                if (res.status === 200) {
                    setMonthlyChartRecords(res.data.averageMonthlyRecordings)
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const getWeeklyChartRecords = React.useCallback(() => {
        axios.get('/users/recordings/weekly')
            .then(res => {
                if (res.status === 200) {
                    setWeeklyChartRecords(res.data.weeklyRecordings)
                }
            }).catch(err => {
                console.log(err.response)
            })
    }, [])

    const getCustomerRecordings = useCallback(() => {
        axios.get('/users/recordings')
            .then(res => {
                if (res.status === 200 && res.data.recordings.length > 0) {
                    setCustomerRecordings(res.data.recordings)
                    getMostRecentAndInitialRecording()
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const getMe = () => {
        setGeneralAppLoading(true)

        axios.get('/users/me')
            .then(res => {
                if (res.status === 200) {
                    setLogedCustomer({
                        ...res.data.me,
                        fullName: `${res.data.me.firstName} ${res.data.me.lastName}`
                    })
                    setGeneralAppLoading(false)
                }
            }).catch(err => {
                setGeneralAppLoading(false)
                console.log(err.response)
            })
    }

    const getMostRecentAndInitialRecording = () => {
        // setGeneralAppLoading(true)

        axios.get('/users/record')
            .then(res => {
                if (res.status === 200) {
                    setMostRecentRecording(res.data.mostRecentRecording)
                    setInitialRecording(res.data.initialRecording)
                    // setGeneralAppLoading(false)
                }
            }).catch(err => {
                // setGeneralAppLoading(false)
                console.log(err.response)
            })
    }

    const logout = React.useCallback(async () => {
        setGeneralAppLoading(true)
        setLogedCustomer({})
        setMostRecentRecording({})
        setInitialRecording({})
        setToken()
        await AsyncStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']

        setTimeout(() => {
            setAuthenticated(false)
            setGeneralAppLoading(false)
        }, 2000)
    }, [])

    const checkForToken = React.useCallback(async () => {
        const foundToken = await AsyncStorage.getItem('token')
        if (!foundToken) return

        if (foundToken) {
            const decodedToken = jwtDecode(foundToken)
            setToken(foundToken)

            if (new Date(decodedToken.exp) * 1000 < new Date()) {
                logout()
            }

            axios.defaults.headers.common['Authorization'] = foundToken
            setAuthenticated(true)
            getMe()
            getCustomerRecordings()
            getWeeklyChartRecords()
            getMontlyChartRecords()
        }
    }, [token])

    const value = {
        authenticated,
        logedCustomer,
        setLogedCustomer,
        setAuthenticated,
        getMostRecentAndInitialRecording,
        generalAppLoading,
        setGeneralAppLoading,
        logout,
        checkForToken,
        mostRecentRecording,
        setMostRecentRecording,
        initialRecording,
        setInitialRecording,
        setToken,
        getWeeklyChartRecords,
        weeklyChartRecords,
        monthlyChartRecords,
        getMontlyChartRecords,
        customerRecordings,
        getCustomerRecordings
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
