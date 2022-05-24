import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Box } from '@chakra-ui/react'
import Body1 from './components/Body/Body1'
import Body2 from './components/Body/Body2'
function App() {
 
  return (
    <>
    <Box>
     <Navbar />
     <Body1 />
     <Body2 />
     <Footer />
     </Box>
    </>
  )
}

export default App
