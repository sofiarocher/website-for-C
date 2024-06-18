import axios from 'axios';

export async function storeEmail(email: string) {
    const url = 'https://api.brevo.com/v3/contacts/list/id/22';
    const data = {
        email: email
    };
    const headers = {
        'content-type': 'application/json',
        'api-key': process.env.REACT_APP_BREVO_API_KEY
    };
    console.log('Brevo API Key:', process.env.REACT_APP_BREVO_API_KEY);

    try {
        const response = await axios.post(url, data, { headers: headers });
        return { success: true, data: response.data };
    } catch (error: any) {
        return { success: false, error: error.response.data };
    }
}
