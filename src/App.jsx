import './App.css'
import { Avatar} from '@chakra-ui/react';
import myImage from "../src/assets/image/my-image.jpg"
function App() {


  return (
    <>
      <div className="text-center text-blue-600 mt-5 font-semibold text-3xl">
        <h1>My Portfoilo</h1>
        <Avatar name='Dan Abrahmov' size='2xl'className='mt-5' src={myImage} />
      </div>
    </>
  )
}

export default App
