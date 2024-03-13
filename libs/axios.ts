// Import axios from the axios library
import Axios from 'axios';

// Create an instance of Axios with the base URL set to 'http://localhost:3001'
const axios = Axios.create({
    baseURL: process.env.EXPO_PUBLIC_BACKEND_URL
});

// Export the axiosInstance
export default axios;
