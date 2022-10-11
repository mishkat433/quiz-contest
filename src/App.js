import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './componants/Home/Blog/Blog';
import Home from './componants/Home/Home/Home';
import QuizQuestion from './componants/Home/QuizQuestion/QuizQuestion';
import Statistics from './componants/Home/Statistics/Statistics';
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
          path: "/quiz/:id",
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizQuestion />
        },
        {
          path: "/statictics",
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics />
        },
        {
          path: "/blog",
          element: <Blog />
        },
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