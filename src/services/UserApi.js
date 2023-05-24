import axios from 'axios';

export const PostList = async () => {
  try {
    const response = await axios.get('http://localhost:3003/posts/');
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}


export const DeletePost = async (id) => {
  try {
    const response = await axios.delete('http://localhost:3003/posts/' + id);
    return response;
  } catch (error) {
    return error;
  }
}

export const EditPost = async (item) => {
  try {
    let reponse = await axios.get('http://localhost:3003/posts/');
    return reponse;
  } catch (error) {
    return error;

  }

}

export const updatePost = async (item) => {

  let reponse = await axios.patch('http://localhost:3003/posts/' + item.id, item);
  return reponse;
}

export const createPost = async (item) => {

  let reponse = await axios.post('http://localhost:3003/posts/', item);
  return reponse;
}