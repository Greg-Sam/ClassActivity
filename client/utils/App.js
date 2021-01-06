import { useState, useEffect } from 'react'
import PostAPI from './PostAPI/PostAPI'

const {
  getPosts,
  createPost,
} = PostAPI

const App = () => {
  const [postState, setPostState] = useState({
    post: '',
    posts: []
  })

  postState.handleInputChange = event => {
    setPostState({ ...postState, [event.target.name]: event.target.value })
  }

  postState.handleAddPost = event => {
    let posts = JSON.parse(JSON.stringify(postState.posts))
    createPost({
      text: postState.post
    })
      .then(({ data: post }) => {
        posts.push(post)
        setPostState({ ...postState, posts, post: '' })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getPosts()
      .then(({ data: posts }) => {
        setPostState({ ...postState, posts })
      })
  }, [])
}

export default App