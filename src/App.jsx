import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {

  return (
    <>
    <div className='min-h-screen'>

    <div className=' top-0 z-10 min-h-screen w-full bg-gradient-to-b from-sky-600 via-sky-400 to-sky-300'>

    <NavBar />
    <About />
    <Projects />
    <Contacts />
    </div>
    </div>
    </>
  )
}

export default App
