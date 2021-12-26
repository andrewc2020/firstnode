import fetch from 'node-fetch'


const getUser = async (id) =>{
    const url = `https://jsonplaceholder.typicode.com/users/${id}` //?
    console.log(url) //?
    const res = await fetch(url)
    const data = await res.json()
    console.log(data) 


}

getUser(2);
 
