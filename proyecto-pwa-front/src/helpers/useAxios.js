import axios from 'axios';
 
const GetPosts = async (url) => {
    let response = await axios.get(url);
    return response.data;
};

export { GetPosts };
