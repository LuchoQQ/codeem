import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useFetch = (endpoint: string, queryKey: string | Array<any>, queryParams: any = {}) => {
  //console.log(endpoint);
  const { data, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: [queryKey, queryParams], // Asegura que el queryKey sea único para diferentes queryParams
    queryFn: () => fetchFromAPI(endpoint, queryParams),
  });

  return { data, isLoading, error, refetch, isRefetching };
};

export default useFetch;

const fetchFromAPI = async (endpoint: string, queryParams: any) => {
    try {
        const { data } = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}${endpoint}`, { params: queryParams});
        return data;
    } catch (error) {
        console.log(error)
    }
};