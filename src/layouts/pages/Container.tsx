import { Container as MuiContainer, styled } from '@mui/material'
import { memo } from 'react'
import { ChildrenProps } from '../../common/types';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


type PageContainerProps = ChildrenProps & {

}

const Container = ({ children }: PageContainerProps) => {

  return (
    <MuiContainer maxWidth='xl' component="main" sx={{ flexGrow: 1, p: 2 }}>
      <DrawerHeader />
      {children}
    </MuiContainer>
  );

}

export default memo(Container);