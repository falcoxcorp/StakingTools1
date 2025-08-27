import { memo } from 'react'
import { Header } from './styled';
import Typography from '@mui/material/Typography'

type TableHeaderTitleProps = {
  title: string
}

const TableHeaderTitle = ({ title }: TableHeaderTitleProps) => {

  return (
    <Header>
      <Typography variant="h1">{title}</Typography>
    </Header>
  );

}

export default memo(TableHeaderTitle);