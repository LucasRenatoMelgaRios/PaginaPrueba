import axios from 'axios';

export const GetSeriesData = async () => {
    try {
        const response = await axios.get(`https://66abe0b7f009b9d5c7309922.mockapi.io/api/v1/series`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('listando series')
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};