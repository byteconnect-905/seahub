import axios from 'axios';

export class DccApi {
  req;

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

  getContainers() {
    return this.req.get('/app/containers');
  }
}

const dccApi = new DccApi();
export { dccApi };