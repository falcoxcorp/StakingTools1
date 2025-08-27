import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import StackItem from '../StackItem/StackItem'
import { INetworks } from '../../contracts/instances/interfaces'
import { PaperSection } from '../PaperSection'
import { Chip, Stack } from '@mui/material'

type NetworkSummaryProps = {
  network: INetworks
}

const NetworkSummary = ({ network }: NetworkSummaryProps) => {
  const { t } = useTranslation('erc20')
  return (
    <PaperSection title={t('confirm.network.details')}>
      <Stack gap={1}>
        <StackItem title={t('confirm.network.name')} data={network?.name} />
        <StackItem title={t('confirm.network.symbol')} data={<Chip label={network?.symbol} />} />
      </Stack>
    </PaperSection>
  );

}

export default memo(NetworkSummary);