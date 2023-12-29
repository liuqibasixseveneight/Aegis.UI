import { type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { PageBreadcrumbProps } from './types';

const stringWithoutDash = (string: string) => string?.replace(/-/g, ' ');

const lowercaseSpecificWords = (
  inputString: string,
  wordsToLowercase: string[]
): string => {
  const words: string[] = inputString?.split(/\b/);

  const result: string[] = words?.map((word) => {
    const lowercaseWord = word?.toLowerCase();
    return wordsToLowercase?.includes(lowercaseWord) ? lowercaseWord : word;
  });

  return result?.join('');
};

const PageBreadcrumb: FC<PageBreadcrumbProps> = ({ paths }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathsPrefix = `/${location?.pathname?.split('/')?.[1]}`;

  const wordsToLowerCase = ['and', 'to', 'of'];

  return (
    <Breadcrumb>
      {paths?.map((path, index) => {
        const route = paths?.slice(0, index + 1);
        const isLast = index === paths?.length - 1;

        return (
          <BreadcrumbItem
            key={`${path}-${index}`}
            isCurrentPage={isLast}
            paddingBottom={6}
          >
            <BreadcrumbLink
              onClick={() => {
                if (isLast) {
                  return null;
                } else {
                  navigate?.(`${pathsPrefix}/${route}`);
                }
              }}
              textDecoration='none'
              textTransform='capitalize'
              isCurrentPage={isLast}
              fontSize={16}
            >
              {stringWithoutDash(
                lowercaseSpecificWords(path, wordsToLowerCase)
              )}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
