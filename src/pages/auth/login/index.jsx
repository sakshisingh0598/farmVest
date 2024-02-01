import React, { useState } from 'react';
import { ReactComponent as EyeSlash } from './eyeSlash.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Inputs from '../../../components/input';
import Button from '../../../components/button';
import { useLoginUser } from '../../../api/auth/login';
import Cookies from 'js-cookie';

const Login = () => {
  const [email] = useState('');
  const [password] = useState('');
  const navigate = useNavigate();

  const onSuccess = (data) => {
    const token = data?.token;
    Cookies.set('__cookie__', token);
    localStorage.setItem('__token__', token);

    localStorage.setItem('__user__', JSON.stringify(data.user));

    toast.success(`Welcome ${data?.user.name}`);
    navigate('/');
  };

  const onError = (error) => {
    console.log({ error }, 'error');
    toast.error(error?.response?.data?.message);
  };

  const options = {
    onError,
    onSuccess,
  };

  const { mutate: loginUser, isLoading: loading } = useLoginUser(options);

  const formik = useFormik({
    initialValues: {
      email,
      password,
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('invalid email format')
        .required('Above field cannot be blank.'),
      password: yup.string().required('Above field is required.'),
    }),
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const { handleBlur, errors, values, handleSubmit, setFieldValue } = formik;
  return (
    <main className="w-screen h-screen grid grid-cols-12 place-item-center">
      <section className=" bg-white col-span-12  flex justify-center items-center flex-col">
        <>
          <h3 className=" font-bold font-['Young_Serif'] text-agrivest text-4xl">
            Farmcart
          </h3>
          <FormikProvider value={formik}>
            <form
              className="w-full px-6 md:w-[600px] my-4"
              onSubmit={handleSubmit}
            >
              <div className="my-6">
                <Inputs
                  type="text"
                  name="email"
                  displayName="email"
                  value={values.email}
                  handleInputChange={setFieldValue}
                  handleBlur={handleBlur}
                  error={errors?.email}
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
                  error={errors?.password}
                />
              </div>
              <Button isSubmitting={loading} text={'login'} />

              <p className="w-full  text-black py-3 rounded-2xl uppercase text-sm cursor-pointer">
                Dont have an account ?
                <Link to="/register" className="text-agrivest">
                  {' '}
                  sign up
                </Link>
              </p>
              <p className="my-4 text-center uppercase text-sm">
                <span className="text-agrivest underline">
                  forgot password?
                </span>
              </p>
            </form>
          </FormikProvider>
        </>
      </section>
    </main>
  );
};

export default Login;
