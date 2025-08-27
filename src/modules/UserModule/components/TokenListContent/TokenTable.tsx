import { memo } from 'react'
import { tokeListColumns } from '../../../CreateTokenModule/constants/token-list-column'
import { Table } from '../../../../layouts/Table'
import { INetworks, TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces'
import { isEmpty } from 'lodash'
import { Box } from '@mui/material'
import { NotSearchResult } from '../../../../components/NotSearchResult'

type TokenTableProps = {
  tokens: {
    _id: number,
    name: string,
    symbol: string,
    tokenAddress: string
  }[]
  error: any
  network: INetworks | null
  token: TOKEN_TYPE_ENUM
}

const TokenTable = ({ tokens, error, network, token }: TokenTableProps) => {

  if (isEmpty(network)) return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} mt={4}>
      <NotSearchResult />
    </Box>
  )

  const rows = tokens?.map((token, index) => ({
    ...token,
    _id: index
  }))

  const orderTokens = rows?.sort((a, b) => b._id - a._id)

  return (
    <Table
      columns={tokeListColumns(token)}
      data={orderTokens || []}
      total={rows?.length}
      isLoading={!rows}
      error={error}
    />
  )

}

export default memo(TokenTable);