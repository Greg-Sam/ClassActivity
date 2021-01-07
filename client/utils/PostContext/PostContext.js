import { createContext } from 'react'

const PostContext = createContext({
  post: '',
  posts: [],
  handleInputChange: () => { },
  handleAddItem: () => { }
})

export default PostContext