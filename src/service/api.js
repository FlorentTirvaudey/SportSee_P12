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
        console.log("datas", response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

export const createUserFromAPIData = async (userId) => {
    const data = await fetchData(`${userId}`)
    return createUser(data)
}

/**
 * 
 *   API call to fetch activity datas
 * 
 */
export const fetchDataActivity = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}/activity`)
        console.log("datas activity", response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

/**
 * 
 *  API call to fetch session datas
 * 
 */
export const fetchDataAverageSession = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}/average-sessions`)
        console.log("datas average session", response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

/**
 * 
 *   API call to fetch performance datas
 * 
 */
export const fetchDataPerformance = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}/performance`)
        console.log("datas performance", response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
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
 *  Fetching mock datas
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
 *  Fetching mock datas
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