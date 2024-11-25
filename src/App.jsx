import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ToDoList from './components/ToDoList'
import Records from './components/Records'
import ErrorPage from './components/ErrorPage'
import Navigation from './components/Navigation'
import RegisterUser from './components/RegisterPage'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/toDoList' element={<Navigation><ToDoList/></Navigation>}/>
      <Route path='/records' element={<Navigation><Records/></Navigation>}/>
      <Route path='/register' element={<RegisterUser/>}/>
      
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default App
