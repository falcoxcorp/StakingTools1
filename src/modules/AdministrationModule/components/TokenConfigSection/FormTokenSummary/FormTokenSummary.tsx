import { Divider, Stack, Switch, styled, Typography } from '@mui/material';
import { memo, useMemo } from 'react'
import { StackItem } from '../../../../../components/StackItem';
import { useTranslation } from 'react-i18next';
import { formatEther } from 'ethers/lib/utils';
import { useCallTokenConfig } from '../../../../../hooks/useCallTokenConfig';
import { useTokenContext } from '../../../context/TokenContext';
import { TOKEN_TYPE_ENUM } from '../../../../../contracts/instances/interfaces';

type FormTokenSummaryProps = {
  tokenAddress: string
}

const Summary = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 16,
  width: '100%',
  gap: 8,
  [theme.breakpoints.down('sm')]: {
    padding: 8,
  }
}))

const FormTokenSummary = ({ tokenAddress }: FormTokenSummaryProps) => {
  const { t } = useTranslation('admin')
  const {token} = useTokenContext()
  const { config } = useCallTokenConfig(tokenAddress, token as TOKEN_TYPE_ENUM)

  const paymentAmount = useMemo(() => {
    const payment = formatEther(config?.paymentAmount || 0)
    return `${payment} ${config?.name || ''}`
  }, [formatEther, config])

  return (
    <Summary>
      <Typography variant="h1" color="primary">{t('config.details')}</Typography>
      <Stack
        divider={<Divider flexItem orientation='vertical' />} gap={{ xs: 2, md: 8 }} sx={{
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column', md: 'row'
          }
        }}>
        <StackItem width={'100%'} title={t('etherConfig.paymentAmount')} data={
          <Typography variant="h5" color="primary" fontWeight={800}>{paymentAmount}</Typography>} />
        <StackItem width={'100%'} title={t('etherConfig.isActive')} data={
          <Switch
            readOnly
            inputProps={{
              readOnly: true
            }} checked={config?.isActive  || false}
          />
        }
        />
      </Stack>
    </Summary>
  );

}

export default memo(FormTokenSummary);