import { Tab } from '@headlessui/react';
import React from 'react';
import Button from '../button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const UpdateProfileForm = () => {
  const user = JSON.parse(localStorage.getItem('__user__'));
  return (
    <Tab.Panel className={classNames('rounded-xl  px-6 py-4')}>
      <form>
        <div className="flex justify-center">
          <p className="w-24 h-24 my-6 bg-gray-200 text-agrivest rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </p>
        </div>
        <div className="grid grid-cols-12 gap-2 my-6">
          <label className="block relative floated-label col-span-6">
            <input
              type="text"
              className="w-full py-3 px-4 outline-none border-none focus:outline-none shadow-lg rounded-2xl"
              placeholder="John Doe"
              value={user?.name}
            />
            <p className="uppercase text-sm bg-white text-center translate-x-2 px-2">
              fullname
            </p>
          </label>
          <label className="block relative floated-label col-span-6">
            <input
              type="text"
              className="w-full py-3 px-4 outline-none border-none focus:outline-none shadow-lg rounded-2xl"
              placeholder="John Doe"
              value={user?.email}
            />
            <p className="uppercase text-sm bg-white text-center translate-x-2 px-2">
              email
            </p>
          </label>
        </div>
        <label className="block relative floated-label my-6">
          <input
            type="text"
            className="w-full py-3 px-4 outline-none border-none focus:outline-none shadow-lg rounded-2xl"
            placeholder="John Doe"
            value={!user?.phone ? '080 0000 000' : user.phone}
          />
          <p className="uppercase text-sm bg-white text-center translate-x-2 px-2">
            phone
          </p>
        </label>
        <label className="block relative floated-label my-6">
          <input
            type="text"
            className="w-full py-3 px-4 outline-none border-none focus:outline-none shadow-lg rounded-2xl"
            placeholder="John Doe"
            value={!user?.gender ? 'Male' : user.gender}
          />
          <p className="uppercase text-sm bg-white text-center translate-x-2 px-2">
            Gender
          </p>
        </label>
        <Button text={'update'} type="submit" />
      </form>
    </Tab.Panel>
  );
};

export default UpdateProfileForm;
