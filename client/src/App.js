import { Fragment, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import Form from './components/Form'


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

  return (
    <>


      <Navbar/>
      <Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Form />
        </Container>
      </Fragment>
      
    </>
  )
}

export default App
