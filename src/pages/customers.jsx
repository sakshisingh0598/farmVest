import React from 'react';

import SellerTable from '../components/sellers/table/';
import { sellerColumns } from '../components/sellers/table/column';
import { useGetSellers } from '../api/sellers';
import { useGetUsers } from '../api/users';
import { Tab } from '@headlessui/react';
import UserTable from '../components/users/table';
import { userColumns } from '../components/users/table/column';

const Customers = () => {
  const { data: sellers, isLoading: loadingSellers } = useGetSellers();
  const { data: users, isLoading: loadingUsers } = useGetUsers();

  console.log(users);
  if (loadingUsers) return <p>loading Users</p>;
  if (loadingSellers) return <p>loading Sellers</p>;
  return (
    <section>
      <Tab.Group>
        <Tab.List>
          <Tab className={'mx-4 '}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? 'border py-2 px-4 rounded-xl'
                    : 'bg-white text-black'
                }
              >
                Users
              </button>
            )}
          </Tab>
          <Tab className={'mx-4 '}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? 'border py-2 px-4 rounded-xl'
                    : 'bg-white text-black'
                }
              >
                Sellers
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {users?.success && (
              <UserTable COLUMNS={userColumns} tableData={users?.users} />
            )}
          </Tab.Panel>

          <Tab.Panel>
            {sellers?.success && (
              <SellerTable
                COLUMNS={sellerColumns}
                tableData={sellers?.sellers}
              />
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Customers;
