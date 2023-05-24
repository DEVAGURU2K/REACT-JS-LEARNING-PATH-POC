import axios from 'axios';

export const UserList = async (id)=>
{
     let reponse = await axios.delete('https://jsonplaceholder.typicode.com/users/{id}');
     return reponse;
}
