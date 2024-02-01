import { useMemo, useState } from 'react';
import { CSVLink } from 'react-csv';
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useFilters,
  useRowSelect,
} from 'react-table';
import GlobalFilter from './globalFilter';
import './table.css';
import PageCount from './pageCount';
import cls from 'classnames';
import { Checkbox } from './checkbox';
import fromUnixTime from 'date-fns/fromUnixTime';
import { TrashIcon } from '@heroicons/react/24/solid';

const SellerTable = ({
  tableData = [],
  COLUMNS,
  handlePage,
  isReset,
  handleReset,
  fileName,
}) => {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => tableData, [tableData]);

  console.log({ data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,

    gotoPage,
    pageCount,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    page,

    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: (head) => (
            <div>
              <Checkbox {...head.getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => {
            return (
              <div>
                <Checkbox {...row.getToggleRowSelectedProps()} />
              </div>
            );
          },
        },
        ...columns,
        {
          id: 'action',
          Header: (head) => <div>Action</div>,
          Cell: ({ row }) => {
            return (
              <div className="flex justify-center items-center">
                <TrashIcon className="h-5 w-5 text-red-400" />
              </div>
            );
          },
        },
      ]);
    }
  );
  const { pageIndex, globalFilter } = state;

  const getSelectedRows = (selectedFlatRows) => {
    const selected = selectedFlatRows.map((rows) => rows?.values);
  };

  return (
    <section id="table" className="pt-4 px-4">
      <aside className="md:flex my-4 justify-between text-black items-center ">
        <h3 className="capitalize text-left w-[400px] flex whitespace-nowrap">
          <p className="">sellers </p>
        </h3>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </aside>
      <aside className="overflow-x-scroll">
        <table
          {...getTableProps()}
          className="text-sm  overflow-x-scroll rounded-2xl"
        >
          <thead>
            {headerGroups?.map((headerGroup) => (
              <tr {...headerGroup?.getHeaderGroupProps()}>
                {headerGroup.headers?.map((column) => (
                  <th {...column?.getHeaderProps()} className="font-semibold">
                    {' '}
                    {column?.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="capitalize">
            {page?.map((row) => {
              prepareRow(row);
              return (
                <tr {...row?.getRowProps()}>
                  {row?.cells?.map((cell) => {
                    return (
                      <td {...cell?.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </aside>
      <section className="text-center text-black text-sm uppercase my-2 p-3">
        <p>
          Table {pageIndex + 1} of {pageOptions.length}
        </p>
        <aside className="my-3">
          {pageOptions.length > 3 && (
            <p>
              Go to Table :{' '}
              <input
                className="py-1 px-2 border-0 shadow-md outline-none rounded-md w-[200px]"
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                type="number"
                defaultValue={pageIndex + 1}
                style={{ width: '50px', textAlign: 'center' }}
              />
            </p>
          )}
        </aside>
        <aside className="border flex mx-auto justify-between overflow-hidden text-sm my-2 uppercase rounded-full md:w-[400px] py-3 bg-gray-100">
          <button
            className="bg-gray-100 px-3 cursor-pointer"
            disabled={!canPreviousPage}
            onClick={() => gotoPage(0)}
          >
            {'<<'}
          </button>
          <button
            className="bg-gray-100 px-3 cursor-pointer"
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
          >
            Previous
          </button>
          <button
            className="bg-gray-100  px-3 cursor-pointer"
            disabled={!canNextPage}
            onClick={() => nextPage()}
          >
            Next
          </button>
          <button
            className="bg-gray-100  px-3 cursor-pointer"
            disabled={!canNextPage}
            onClick={() => gotoPage(pageCount - 1)}
          >
            {'>>'}
          </button>
        </aside>
      </section>
    </section>
  );
};

export default SellerTable;
