import { RouterProvider } from 'react-router-dom';
import './App.css';
import NavberProvider from './Context/NavberProvider';
import router from './Routes/router';

function App() {

  return (
    <>
      <div className='bg-primary min-h-full'>
        <NavberProvider>
          <RouterProvider router={router} />
        </NavberProvider>
      </div>
    </>
  )
}

export default App
