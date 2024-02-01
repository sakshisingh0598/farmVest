import fromUnixTime from 'date-fns/fromUnixTime';
export const COLUMNS = [
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
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Product',
    accessor: 'product',
  },
  {
    Header: 'Date Created',
    Footer: 'Date Created',
    accessor: 'createdOn',
    Cell: ({ value }) => {
      const time = `${fromUnixTime(value)}`;

      return time?.split('GMT')[0];
    },
  },
];
