import Axios from '@/services/Axios';

export default {
  async auth(username, password, company) {
    const payload = { username, password, company };
    const response = await Axios.post('/auth', payload);

    return response.data;
  },
};
