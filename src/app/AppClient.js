/**
 * Defines the appliction client used by timesheet
 */
import axios from 'axios';
import BaseClient from './BaseClient';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
class AppClient extends BaseClient {


  /**
   * Adds @timesheetRecord to the employee
   * - if success fire RECORD_ADDED with the { timesheetRecord }
   * - if failure fire RECORD_ADDED with error: true
   */
  addName(name) {
  return Promise.all([
    axios.post('http://10.1.11.9:3001/add', { 
     name: name.name, 
     id: name.id 
    }).then(function(response){
    console.log('saved successfully')
     axios.get("http://10.1.11.9:3001/"+name.id,{})
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            if (err ) {
              console.log("ERRRRR")
            }
          
          })
      }),
    
      ])
    }


    getName(id){
      return axios.get("http://10.1.11.9:3001/"+id,{})
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            if (err ) {
              console.log("ERRRRR")
            }
          
          })
    }
}
export default new AppClient();
