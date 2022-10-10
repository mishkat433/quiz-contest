import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componants/Home/Home/Home';
import QuizQuestion from './componants/Home/QuizQuestion/QuizQuestion';
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
        },
        {
          path: "/cart/:id",
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizQuestion />
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