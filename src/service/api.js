import axios from "axios";
import mockData from "../data/mockdata";
import createUser from "./userfactory";

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${endpoint}`)
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

export const fecthMockData = (endpoint) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData[endpoint])
        }, 1000)
    })
}

export const createUserFromAPIData = async (userId) => {
    const data = await fetchData(`${userId}`)
    return createUser(data)
}

export const createUserFromMockData = async (userId) => {
    const data = await fecthMockData(`${userId}`)
    return createUser(data)
}
