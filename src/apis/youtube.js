
import axios from 'axios';
const KEY = 'AIzaSyBCxJtMaE_Bpw4t28IqBl0xLij6bECzE4U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
    // headers: {
    //     Authorization: 'Client-ID 36b3e01fe5a8729234019f2be5fb6f53859ed204034ea07a9ba6a138f8110edd' 
    // }
});