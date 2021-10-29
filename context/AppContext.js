import React, { useCallback, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const AppContext = React.createContext()

export const useAppContext = () => {
    return useContext(AppContext)
}

const AppContextProvider = ({ children }) => {
    // GENERAL
    const [token, setToken] = React.useState()
    const [authenticated, setAuthenticated] = React.useState(false)
    const [generalAppLoading, setGeneralAppLoading] = React.useState(false)

    // CUSTOMER RELATED
    const [logedCustomer, setLogedCustomer] = React.useState({})
    const [customerRecordings, setCustomerRecordings] = React.useState([])

    // WEIGHT RECORDINGS
    const [mostRecentRecording, setMostRecentRecording] = React.useState({})
    const [initialRecording, setInitialRecording] = React.useState({})
    const [monthlyChartRecords, setMonthlyChartRecords] = React.useState([])
    const [weeklyChartRecords, setWeeklyChartRecords] = React.useState([])

    // BODY PART RECORDINGS
    const [customerBodyPartRecordings, setCustomerBodyPartRecordings] = React.useState([])
    const [weeklyBodyPartRecords, setWeeklyBodyPartRecords] = React.useState([])
    const [monthlyAverageBodyPartDimensions, setMonthlyAverageBodyPartDimensions] = React.useState([])
    const [mostRecentBodyPartMeasurement, setMostRecentBodyPartMeasurement] = React.useState({})
    const [initialBodyPartMeasurement, setInitialBodyPartMeasurement] = React.useState({})

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

    const getAverageMonthlyBodyPartDimensions = React.useCallback(() => {
        axios.get('/users/circumferences/monthly')
            .then(res => {
                if (res.status === 200) {
                    setMonthlyAverageBodyPartDimensions(res.data.averageMonthlyRecordings)
                }
            }).catch(err => {
                console.log(err.response)
            })
    }, [])

    const getWeeklyBodyPartChartRecords = React.useCallback(() => {
        axios('/users/circumferences/weekly')
            .then(res => {
                if (res.status === 200) {
                    setWeeklyBodyPartRecords(res.data.weeklyRecordings)
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
                    if (customerRecordings.length > 0) {
                        getMostRecentAndInitialRecording()
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const getCustomerBodyPartMeasurements = useCallback(() => {
        axios('/users/circumferences')
            .then(res => {
                if (res.status === 200) {
                    setCustomerBodyPartRecordings(res.data.measurements)
                    if (customerBodyPartRecordings.length > 0) {
                        getMostRecentAndInitialBodyPartMeasure()
                    }
                }
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

    const getMostRecentAndInitialBodyPartMeasure = () => {
        axios.get('/users/circumferences/initial/recent')
            .then(res => {
                if (res.status === 200) {
                    setMostRecentBodyPartMeasurement(res.data.mostRecentBodyPartMeasure)
                    setInitialBodyPartMeasurement(res.data.initialBodyPartMeasure)
                }
            }).catch(err => {
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
            getCustomerBodyPartMeasurements()
            getWeeklyChartRecords()
            getMontlyChartRecords()
            getWeeklyBodyPartChartRecords()
            getAverageMonthlyBodyPartDimensions()
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
        getWeeklyBodyPartChartRecords,
        weeklyChartRecords,
        monthlyChartRecords,
        getMontlyChartRecords,
        customerRecordings,
        getCustomerRecordings,
        weeklyChartRecords,
        setWeeklyChartRecords,

        //BODY PART STUFF
        customerBodyPartRecordings,
        setCustomerBodyPartRecordings,
        mostRecentBodyPartMeasurement,
        setMostRecentBodyPartMeasurement,
        initialBodyPartMeasurement,
        setInitialBodyPartMeasurement,
        weeklyBodyPartRecords,
        setWeeklyBodyPartRecords,
        monthlyAverageBodyPartDimensions,
        setMonthlyAverageBodyPartDimensions,
        getAverageMonthlyBodyPartDimensions
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
