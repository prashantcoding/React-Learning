export const Columns = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "id",
  },
  {
    Header: "first Name",
    accessor: "first_name",
    Footer: "first Name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
  },
  {
    Header: "Date of Birth",
    accessor: "data_of_birth",
    Footer: "Date of Birth",
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
  },
];

export const Gropu_Columns = [
  { Header: "Id", accessor: "id", Footer: "Id" },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "first Name",
        accessor: "first_name",
        Footer: "first Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        accessor: "data_of_birth",
        Footer: "Date of Birth",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone",
      },
    ],
  },
];
