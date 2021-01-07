import { useState } from 'react'
import Navbar from './components/Navbar'


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
      
    </>
  )
}

export default App
