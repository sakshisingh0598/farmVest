import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Inputs from '../../../components/input';
import Button from '../../../components/button';

const Register = () => {
  const [username] = useState('');
  const [email] = useState('');
  const [password] = useState('');

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username,
      password,
      email,
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('Username field cannot be blank.'),
      password: yup.string().required('Password field is required.'),
      email: yup.string().email().required('Email field is required.'),
    }),
    onSubmit: (values) => {
      navigate('/login');
    },
  });

  const { handleBlur, errors, values, handleSubmit, setFieldValue, touched } =
    formik;
  return (
    <main className="w-screen h-screen grid grid-cols-12 place-item-center">
      <section className=" bg-white col-span-12  flex justify-center items-center flex-col">
        <>
          <h3 className=" font-bold font-['Young_Serif'] text-agrivest text-4xl">
            Agrivest
          </h3>
          <FormikProvider value={formik}>
            <form
              className="w-full px-6 md:w-[600px] my-4"
              onSubmit={handleSubmit}
            >
              <div className="my-6">
                <Inputs
                  type="email"
                  name="email"
                  displayName="email"
                  value={values.email}
                  handleInputChange={setFieldValue}
                  handleBlur={handleBlur}
                  error={touched.email && errors?.email}
                />
              </div>
              <div className="my-6">
                <Inputs
                  type="text"
                  name="username"
                  displayName="username"
                  value={values.username}
                  handleInputChange={setFieldValue}
                  handleBlur={handleBlur}
                  error={touched.username && errors?.username}
                />
              </div>

              <div className="my-6">
                <Inputs
                  type="password"
                  name="password"
                  displayName="password"
                  value={values.password}
                  handleInputChange={setFieldValue}
                  handleBlur={handleBlur}
                  error={touched.password && errors?.password}
                />
              </div>
              <Button
                // isSubmitting={adminLoading || merchantLoading}
                // handleClick={}
                text={'Register'}
              />
              <p
                className="uppercase text-center text-agrivest my-4 cursor-pointer"
                onClick={() => navigate('/login')}
              >
                {' '}
                Login{' '}
              </p>
            </form>
          </FormikProvider>
        </>
      </section>
    </main>
  );
};

export default Register;
