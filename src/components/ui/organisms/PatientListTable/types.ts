export type PatientListTableColumn = {
  property: string;
  displayName: string;
};

export type PatientListTableDataItem = {
  id: string | number;
  name: string;
  age: string | number;
  diagnosis: string;
  period: string;
  triageCategory: string;
  status: 'red' | 'amber' | 'green';
};

export type PatientListTableProps = {
  columns: PatientListTableColumn[];
  data: PatientListTableDataItem[];
};
