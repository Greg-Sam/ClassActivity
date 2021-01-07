import { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import Form from './components/Form'
import Blog from './components/Blog'
import background from './img/background.jpg'

const App = () => {



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
          <Form />

          <Blog />
        </Container>
      </>

    </>
  )
}

export default App
