import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 222fdb96124f14060bab7e14ab5f04cd2219cd8c581e1824e4ce0db7e8d7a5b4'
    }
});