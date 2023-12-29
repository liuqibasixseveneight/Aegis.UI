import { ReactNode } from 'react';

export type ModulePageHeadingProps = {
  title: string;
  subtitle?: string;
};

export type ModulePageProps = {
  heading: ModulePageHeadingProps;
  content: ReactNode;
  withoutHeading?: boolean;
};
