import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page=1, currency='usd'){
    const perPage = 10;
    try {
        const response=await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order =market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&locale=en`);
        
        return response.data;
    } catch (error) {
        console.error("Error fetching coin data:", error);
        throw error; // Rethrow the error to handle it in the calling function if needed
    }
}