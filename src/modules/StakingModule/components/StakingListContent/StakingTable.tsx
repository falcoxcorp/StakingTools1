import { memo } from 'react'
import { Table } from '../../../../layouts/Table'
import { isEmpty } from 'lodash'
import { Box } from '@mui/material'
import { NotSearchResult } from '../../../../components/NotSearchResult'
import { stakingListColumns } from '../../../ServiceModule/constants/staking-owner-list-column'

type StakingTableProps = {
  shakings: {
    _id: number,
    staking: string
  }[]
  error: any
}

const StakingTable = ({ shakings , error }: StakingTableProps) => {

  if (isEmpty(shakings)) return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} mt={4}>
      <NotSearchResult />
    </Box>
  )

  const rows = shakings?.map((staking, index) => ({
    staking,
    _id: index
  }))

  const orderTokens = rows?.sort((a, b) => b._id - a._id)

  return (
    <Table
      columns={stakingListColumns}
      data={orderTokens || []}
      total={rows?.length}
      isLoading={!rows}
      error={error}
    />
  )

}

export default memo(StakingTable);