import { memo } from 'react'
import TableTokenConfig from './TableTokenConfig';




const TokenConfigSummary = () => {

  // const tokens = useMemo(() => config?.createToken?.paidToken?.filter(tk => ![ADDRESS_TOKENS_ENUM.BNB].includes(tk.address)), [])

  return (
    <TableTokenConfig>
      {/* {tokens?.map(tk => (
        <TableRowItem method={METHODS_ERC20.TOKEN_MATRIX} args={[tk?.address]} tokenAddress={tk?.address} key={tk?.address} />
      ))} */}
    </TableTokenConfig>
  );

}

export default memo(TokenConfigSummary);