import axios from 'axios'

const PostAPI = {
  getPosts: () => axios.get('/api/posts'),
  createPost: post => axios.post('/api/posts', post)
}

export default PostAPI