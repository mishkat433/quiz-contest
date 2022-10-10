import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componants/Home/Home/Home';
import NotFound from './componants/NotFound/NotFound';
import Main from './Layout/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/home",
          element: <Home />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;