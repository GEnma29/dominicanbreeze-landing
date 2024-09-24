import axios from 'axios';


const basicAuth = Buffer.from(`client_id + ':' + client_secret`).toString('base64');
const api = axios.create({
    baseURL: 'https://sync.thewiseagent.com/http/webconnect.asp',
    timeout: 1000,
    headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
    },
  });


const getAuth = async () => {
    const response = await api.get('/auth');
    return response.data;
}