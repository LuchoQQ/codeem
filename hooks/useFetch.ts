import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetch = (endpoint: string, queryKey: string | Array<any>, queryParams: any = {}) => {
  const { data, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: [queryKey, queryParams],
    queryFn: () => fetchFromAPI(endpoint, queryParams),
  });

  return { data, isLoading, error, refetch, isRefetching };
};

export default useFetch;

const fetchFromAPI = async (endpoint: string, queryParams: any) => {
    try {
        // Replace the hardcoded URL with a dynamic one based on the endpoint and queryParams
        const response = await axios.get(`http://localhost:3000/${endpoint}`, { params: queryParams });
        console.log(response)
        return response.data; // Return the actual data
    } catch (error) {
        console.error('fetchFromAPI error:', error);
        throw error; // Throw the error to be handled by react-query
    }
};
