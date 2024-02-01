import React, { useState } from 'react';
import LineChartView from '../components/dashboard/chart/lineChart';
import Overview from '../components/dashboard/overview';
import Products from '../components/dashboard/products';
import { COLUMNS } from '../components/table/column';
import data from '../data.json';
import AllTableHooks from '../components/table';

const overView = [
  {
    id: 1,
    name: 'Total Income',
    amount: 5525,
    margin: '+8.2',
    iconName: 'currency',
  },
  {
    id: 2,
    name: 'Total Expenses',
    amount: 5525,
    margin: '-8.2',
    iconName: 'chart',
  },
  {
    id: 3,
    name: 'Total profit',
    amount: 5525,
    margin: '+8.2',
    iconName: 'percent',
  },
];

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [filterParams, setFilterParams] = useState();
  const [isReset, setIsReset] = useState(false);
  const [fileName, setFileName] = useState('');
  const options = {};

  const params = {
    page,
    ...filterParams,
  };

  const setNewPage = (page) => {
    setPage(page);
  };

  const handleFieldReset = () => {};

  const handleFilterValues = (values) => {};

  return (
    <section className="px-4">
      <aside className="mb-6">
        <h3 className="font-semibold text-[20px]">Welcome, David</h3>
        <p className="text-sm text-gray-400">
          Have a great day with your customers
        </p>
      </aside>
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8">
          <article className="lg:flex items-center mb-6 gap-6">
            {overView.map((view, id) => (
              <Overview view={view} />
            ))}
          </article>
          <article className=" bg-white rounded-lg py-3 px-2">
            <LineChartView />
          </article>
        </section>
        <Products />
      </div>
      <aside className="my-6 bg-white">
        <AllTableHooks
          tableData={data}
          COLUMNS={COLUMNS}
          handlePage={setNewPage}
          isReset={isReset}
          handleReset={handleFieldReset}
          fileName={fileName}
        />
      </aside>
    </section>
  );
};

export default Dashboard;
