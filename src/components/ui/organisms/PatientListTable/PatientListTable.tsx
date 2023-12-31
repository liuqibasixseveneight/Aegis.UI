import { type FC } from 'react';
import {
  Badge,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { PatientListTableDataItem, PatientListTableProps } from './types';

const getRowBackgroundColor = (status: 'red' | 'amber' | 'green') => {
  if (status === 'red') {
    return 'rgba(254, 215, 215, 0.4)';
  } else if (status === 'amber') {
    return 'rgba(255, 236, 179, 0.4)';
  } else if (status === 'green') {
    return 'rgba(198, 246, 213, 0.4)';
  }
};

const PatientListTable: FC<PatientListTableProps> = ({ columns, data }) => {
  return (
    <TableContainer w='full' h='full' overflowY='auto' padding={6}>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {columns?.map((column, index) => (
              <Th key={`${column?.property}-${index}`}>
                {column?.displayName}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row: PatientListTableDataItem) => (
            <Tr
              key={row?.id}
              _hover={{ background: getRowBackgroundColor(row?.status) }}
              cursor='pointer'
              transition='ease-in-out 0.2s'
            >
              {columns?.map((column) => (
                <Td key={column?.property}>
                  {column?.property === 'status' ? (
                    <Badge
                      variant='subtle'
                      colorScheme={row?.[column?.property]}
                      paddingY={1}
                      paddingX={2}
                      borderRadius='3xl'
                    >
                      {row?.[column.property as keyof PatientListTableDataItem]}
                    </Badge>
                  ) : (
                    row?.[column.property as keyof PatientListTableDataItem]
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PatientListTable;
