import axios from 'axios';

export const PostObra = async (obraData) => {
    try {
        const response = await axios.post(`https://66abe0b7f009b9d5c7309922.mockapi.io/api/v1/obras`, obraData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Obra creada exitosamente');
        return response.data;
    } catch (error) {
        console.error('Error al crear la obra:', error);
        throw error;
    }
};
