import axios from 'axios';

export async function storeEmail(email: string) {
    const url = 'https://api.brevo.com/v3/contacts';
    const data = {
        email: email,
        listIds: [22]  // Asegúrate de usar el ID correcto de tu lista
    };
    const headers = {
        'content-type': 'application/json',
        'api-key': process.env.VITE_BREVO_API_KEY
    };

    try {
        const response = await axios.post(url, data, { headers: headers });
        return { success: true, data: response.data };
    } catch (error: any) {
        if (error.response && error.response.status === 400 && error.response.data.code === "duplicate_parameter") {
            try {
                // Si el contacto ya existe, actualízalo para asegurarte de que esté en la lista correcta
                const updateUrl = `https://api.brevo.com/v3/contacts/${email}`;
                const updateResponse = await axios.put(updateUrl, data, { headers: headers });
                return { success: true, data: updateResponse.data };
            } catch (updateError: any) {
                return { success: false, error: updateError.response.data };
            }
        }
        return { success: false, error: error.response.data };
    }
}
