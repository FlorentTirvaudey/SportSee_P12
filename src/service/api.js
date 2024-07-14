import axios from "axios";
import mockData from "../data/mockdata";
import createUser from "./userfactory";
import { formatActivityData, formatPerformanceData, formatSessionData } from "./chartsfactory";
import mockDataActivity from "../data/mockDataActivity";
import mockDataSession from "../data/mockDataSession";
import mockDataPerformance from "../data/mockDataPerformance";


/**
 * 
 *   API call to fetch user datas
 * 
 */
export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}`)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

export const createUserFromAPIData = async (userId) => {
    const data = await fetchData(`${userId}`)
    return createUser(data.data)
}

/**
 * 
 *   API call to fetch activity datas
 * 
 */
export const fetchDataActivity = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}/activity`)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

export const createActivityFromFetchData = async (userId) => {
    const data = await fetchDataActivity(`${userId}`)
    return formatActivityData(data.data)
}

/**
 * 
 *  API call to fetch session datas
 * 
 */
export const fecthDataSession = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}/average-sessions`)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

export const createSessionFromFetchData = async (userId) => {
    const data = await fecthDataSession(`${userId}`)
    return formatActivityData(data.data)
}

/**
 * 
 *   API call to fetch performance datas
 * 
 */
export const fetchDataPerformance = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}/performance`)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

export const createPerformanceFromFetchData = async (userId) => {
    const data = await fetchDataPerformance(`${userId}`)
    return formatPerformanceData(data.data)
}

/**
 * 
 *  Fetching mock user datas
 * 
 */
export const fecthMockData = (endpoint) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData[endpoint])
        }, 1000)
    })
}

export const createUserFromMockData = async (userId) => {
    const data = await fecthMockData(`${userId}`)
    return createUser(data)
}

/**
 * 
 *  Fetching mock activity datas
 * 
 */
export const fecthMockDataActivity = (endpoint) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDataActivity[endpoint])
        }, 1000)
    })
}

export const createActivityFromMockData = async (userId) => {
    const data = await fecthMockDataActivity(`${userId}`)
    return formatActivityData(data)
}

/**
 * 
 *  Fetching mock session datas
 * 
 */
export const fecthMockDataSession = (endpoint) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDataSession[endpoint])
        }, 1000)
    })
}

export const createSessionFromMockData = async (userId) => {
    const data = await fecthMockDataSession(`${userId}`)
    return formatSessionData(data)
}

/**
 * 
 *  Fetching mock performance datas
 * 
 */
export const fecthMockDataPerformance = (endpoint) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDataPerformance[endpoint])
        }, 1000)
    })
}

export const createPerformanceFromMockData = async (userId) => {
    const data = await fecthMockDataPerformance(`${userId}`)
    return formatPerformanceData(data)
}