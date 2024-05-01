import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
const App = () => {

  return (
    <Router>
      <div className='pt-[4.75re] lg:pt-[5.25rem] overflow-hidden '>
        <Header />
        {/* <Button className='mt-10'  >Something</Button> */}
      </div>

      <ButtonGradient />
    </Router>
  )
}

export default App
