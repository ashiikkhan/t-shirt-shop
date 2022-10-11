import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import Orders from './components/Orders/Orders';
import GrandCom from './components/GrandCom/GrandCom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main>Hello World!</Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('tshirt.json'),
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch('tshirt.json'),
        },
        { path: '/orders', element: <Orders></Orders> },
        {
          path: '/grandcomp',
          element: <GrandCom></GrandCom>,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
