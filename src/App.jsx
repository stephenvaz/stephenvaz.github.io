import './App.css'
import { RevealBento } from './components/Bento'
import FuzzyOverlay from './components/FuzzyOverlay'

function App() {

  return (
    <div className='relative overflow-hidden'>
      
      <FuzzyOverlay />
      <RevealBento />
      
    </div>
  )
}

export default App
