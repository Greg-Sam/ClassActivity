import { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import Form from './components/Form'
import Blog from './components/Blog'
import background from './img/background.jpg'
import PostAPI from '../src/utils/PostAPI/PostAPI'
const blogs = [
  {
    title: "test",
    text: "test text"
  },
  {
    title: "test2",
    text: "test text"
  },
  {
    title: "test3",
    text: "test text3"
  },
  {
    title: "test4",
    text: "test text4"
  }
]
const App = () => {

const {
  getPosts,
  createPost,
} = PostAPI


  const [postState, setPostState] = useState({
    title: '',
    text: '',
    posts: []
  })

const handleInputChange = event =>
    setPostState({ ...postState, [event.target.name]: event.target.value })


const handleAddPost = event => {
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

const [drawerState, setDrawerState] = useState({
  left: false
})

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setDrawerState({ ...drawerState, [anchor]: open });
}

const [blogState, setBlogState] = useState({
  blogs: []
})



return (
  <>


    <Navbar />

    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Form
          handleAddPost={handleAddPost}
          handleInputChange={handleInputChange}
          text={postState.text} 
          title={postState.title}/>
        {
          blogs.map((data, i) =>
            <Blog
              text={data.text}
              title={data.title}
            />
          )
        }
        <Blog
        />
      </Container>
    </>

  </>
)
}

export default App
