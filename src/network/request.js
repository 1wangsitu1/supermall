import axios from 'axios'
export function request(config) {

  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 8000
  });
  /*  instance.inerceptors.request.use(
     res => {
       return res.data
     },
     err => {
       console.log(err);
     });
   instance.inerceptors.response.use(
     res => {
       return res.data
     },
     err => {
       console.log(err);
     }) */
  return instance(config)
}
