import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import './App.css'
import { ToastContainer } from 'react-toastify';




const LoadingScreen = () => (<p>loading</p>)
const Loadable = (Component) => (props) => {


  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};


function App() {


  const Login = Loadable(lazy(() => import('./pages/auth/login')));
  const Register = Loadable(lazy(() => import('./pages/auth/register')));


  const Dashboard = Loadable(lazy(() => import('./pages/dashboard')));
  const Sidebar = Loadable(lazy(() => import('./layout/sidebar')));
  const Settings = Loadable(lazy(() => import('./pages/settings')));
  const Customers = Loadable(lazy(() => import('./pages/customers')));
  const Products = Loadable(lazy(() => import('./pages/products')));

  const token = localStorage.getItem("__token__");
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Login />} />

        {
          token && (
            <Route path='/' element={<Sidebar />}>
              <Route index element={<Dashboard />} />
              <Route path='settings' element={<Settings />} />
              <Route path='Products' element={<Products />} />
              <Route path='Customers' element={<Customers />} />
              <Route path='Reports' element={<p>Reports</p>} />

            </Route>
          )
        }
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
