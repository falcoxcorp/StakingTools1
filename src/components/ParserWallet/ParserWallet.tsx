import { memo, useMemo } from 'react'
import { exRegWallet } from '../../utils/exReg';
import { Chip, Stack, Tooltip } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useTranslation } from 'react-i18next';
import clipboardCopy from 'clipboard-copy';
import { useEthers } from '@usedapp/core';
import toast from 'react-hot-toast';
import { getContractAddressPath } from '../../utils/address-contract';

type ParserWalletProps = {
  address: string
}

const ParserWallet = ({ address }: ParserWalletProps) => {
  const { t } = useTranslation('common')
  const { chainId } = useEthers()
  const link = useMemo(() => getContractAddressPath({ chainId: chainId as number, address }), [chainId, address, getContractAddressPath])

  if (!address.match(exRegWallet)) {
    return ('Wallet Invalid')
  }

  const truncatedAddress = useMemo(() => `${address?.substring(0, 6)}...${address?.slice(-4)}`, [address])

  const handleCopyClick = async () => {
    try {
      //@ts-ignore
      await clipboardCopy(link);
      toast.success(t('clipboardCopy.success'))
    } catch (error) {
      toast.error(t('clipboardCopy.error'));
    }
  };

  return (
    <Stack direction={'row'} gap={1} alignItems={'center'} justifyContent={'center'}>
      <Tooltip title={t('copyAddress')}>
        <Chip
          variant='outlined'
          label={truncatedAddress}
          onDelete={handleCopyClick}
          deleteIcon={<ContentCopyOutlinedIcon />}
        />
      </Tooltip>
    </Stack>
  );

}

export default memo(ParserWallet);