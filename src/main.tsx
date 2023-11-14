import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NumberOfStudentsFrom from './NumberOfStudentsForm';
import StudentsList from './StudentsList';
import QueryPage from './QueryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NumberOfStudentsFrom />
  },
  {
    path: '/input',
    element: <StudentsList />
  },
  {
    path: '/query',
    element: <QueryPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
