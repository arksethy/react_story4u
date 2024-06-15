const axios = require('axios');

const postApi = (apiUrl, header, body)=>{
    return fetch(apiUrl,{
       method: 'POST',
       headers: header,
       body: JSON.stringify(body)
   }).then((res)=>res.json())
   .catch(e=>console.log(`Error: ${e}`))
}

const getApi = (apiUrl, header)=>{
    return fetch(apiUrl,{
       method: 'GET',
       headers: header,
   }).then((res)=>res.json())
   .catch(e=>console.log(`Error: ${e}`))  

}

const uploadFile = (apiUrl, header, data)=>{
    return axios
    .post(apiUrl, data, {
      headers: header
    })
    .then((res)=>res)
       .catch(e=>console.log(`Error: ${e}`))
}

module.exports  = {
    postApi,
    getApi,
    uploadFile
}