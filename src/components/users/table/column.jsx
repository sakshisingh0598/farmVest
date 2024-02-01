import fromUnixTime from 'date-fns/fromUnixTime';
export const userColumns = [
  {
    Header: 's/n',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    Cell: (value) => {
      return Number(value?.cell.row.id) + 1;
    },
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Type',
    accessor: '_type',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Verified',
    accessor: 'isVerified',
    Cell: ({ value }) => {
      if (value) {
        return <p className=" text-green-600 rounded-full p-1">verified</p>;
      }
      return <p className=" text-red-600 rounded-full p-1">not verified</p>;
    },
  },
  {
    Header: 'Date Created',
    Footer: 'Date Created',
    accessor: 'createdAt',
    Cell: ({ value }) => {
      return value?.slice(0, 10);
    },
  },
];
