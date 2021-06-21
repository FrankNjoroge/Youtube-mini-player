 import axios from 'axios'
 
 const KEY = 'AIzaSyBcRAnehkU33N1Aw58iIzySiX879za42d8'

 export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
         part: 'snippet',
         maxResults: 5,
         key: KEY
     }
 })