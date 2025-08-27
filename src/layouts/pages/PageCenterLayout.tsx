import { FC, memo } from 'react'
import { PageLayout } from '.';
import { PageLayoutProps } from './PageLayout';


const PageCenterLayout: FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {

  return (
    <PageLayout sx={{maxWidth: 1250, marginX: 'auto'}}>
      {children}
    </PageLayout>
  );

}

export default memo(PageCenterLayout);