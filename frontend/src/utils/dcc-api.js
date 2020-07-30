import axios from 'axios';
import { seafileAPI } from './seafile-api';

export class DccApi {
  req;

  username = seafileAPI.getAccountInfo().then(res => res.data.email);

  constructor() {
    const domain = location.host.split(':')[0];
    axios
      .get(`http://${domain}:4000/api/v1/info/dcc-url`)
      .then(res => {
        const dccUrl = res.data.data;
        this.req = axios.create({
          baseURL: `http://${dccUrl}/api/v1`,
        });
        this.req.interceptors.response.use(res => {
          return res.data.data;
        });
        console.log('DccApi loading finished');
      });
  }

  async searchUser(q) {
    const username = await this.username;
    return this.req.get(`/pan/search-user?q=${q}&email=${username}`);
  }
}

const dccApi = new DccApi();
export { dccApi };