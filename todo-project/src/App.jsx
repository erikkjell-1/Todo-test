import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Todo from './views/todo'
import Add from './views/add'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Todo />
    },
    {
      path: '/add',
      element: <Add />
    }
  ])

  return (
      <div className='App'>
        <RouterProvider router={ router } />
        </div>
  )
}

export default App
