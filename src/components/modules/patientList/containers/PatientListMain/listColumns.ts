import { PatientListTableColumn } from '../../../../ui/organisms/PatientListTable/types';

export const listColumns: PatientListTableColumn[] = [
  {
    property: 'name',
    displayName: 'Name',
  },
  {
    property: 'age',
    displayName: 'Age',
  },
  {
    property: 'diagnosis',
    displayName: 'Diagnosis',
  },
  {
    property: 'period',
    displayName: 'Period',
  },
  {
    property: 'triageCategory',
    displayName: 'Triage Category',
  },
  {
    property: 'status',
    displayName: 'Status',
  },
];
