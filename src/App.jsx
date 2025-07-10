import './App.css'
import Navbar from './Page/Navbar'
import { Routes,Route, Form } from 'react-router-dom';
import About from './component/About'
import Home from './component/Home'
import Contact from './component/Contact'
import LogIn from './component/LogIn'
import '@fortawesome/fontawesome-free/css/all.min.css';




// function App() {
//   const [count, setCount] = useState(0)

const App = () =>{  
return (
   <div>
    {/* <Logout></Logout> */}
{/* <Title></Title> */}
 <Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
                <Route path='LogIn' element={<LogIn/>}/> 



</Routes> 


   </div>
  )
}

export default App
