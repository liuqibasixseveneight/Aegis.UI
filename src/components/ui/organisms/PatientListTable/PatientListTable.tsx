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

import { PatientListTableProps } from './types';

const getRowBackgroundColor = (status: 'red' | 'amber' | 'green') => {
  if (status === 'red') {
    return 'rgba(254, 215, 215, 0.2)';
  } else if (status === 'amber') {
    return 'rgba(255, 236, 179, 0.2)';
  } else if (status === 'green') {
    return 'rgba(198, 246, 213, 0.2)';
  }
};

const PatientListTable: FC<PatientListTableProps> = ({ columns, data }) => {
  return (
    <TableContainer w='full' h='full' borderRadius='3xl' overflowY='auto'>
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
          {data?.map((row) => (
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
                    >
                      {row?.[column?.property]}
                    </Badge>
                  ) : (
                    row?.[column?.property]
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
