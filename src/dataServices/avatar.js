const axios = require('axios');

const url = 'https://api.multiavatar.com/';
// const api_key = 'a89bcf993d464c34bd170baca81ff429';

export const getAvatar = async (userName) => {
    const randomAvatarId = Math.floor((Math.random() * 10000) + 1)
    try {
        const avatar = await axios.get(`${url}${randomAvatarId}`);
        return avatar;
    } catch (error) {
        console.log(error);
    }
}