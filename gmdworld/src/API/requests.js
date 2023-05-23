import axios from "axios";

export default class Requests{
    static async getMods(search, filter){
        const response = await axios.post("http://176.57.220.181:4000/getmods",{
          params: {
              search: search,
              filter: filter
          }
      });
        return response;
    }

    static async getModById(id){
      const response = await axios.post("http://176.57.220.181:4000/getmodbyid",{
          params: {
              id: id,
          }
      });
        return response;
    }
    
    static async sendMod(formData){
        const response = await axios.post('http://176.57.220.181:4000/addmod', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        return response;
    }

    static async checkLogin(username, password){
        const response = await axios.post("http://176.57.220.181:4000/checkLogin",{
          params: {
              username: username,
              password: password
          }
      });
        return response;
    }

    static async register(username, password, token){
      const response = await axios.post("http://176.57.220.181:4000/register",{
        username: username,
        password: password,
        token: token,
    });
      return response;
  }
}