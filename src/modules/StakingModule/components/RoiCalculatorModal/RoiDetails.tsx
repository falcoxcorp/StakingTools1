import { Box, Stack } from '@mui/material';
import { memo, useMemo } from 'react'
import { TransTypography } from '../../../../components/TransTypography';
import { PercentValue } from '../../../../components/PercentValue';
import { ITokenInfo } from '../../interfaces/ISmartChef';
import { useApy } from '../../hooks/useApy';

type Props = {
  balance: number,
  staked: number
  apy: number
  stakedTokenInfo: ITokenInfo
  isOpen: boolean
}
const RoiDetails = ({ balance, staked, apy, stakedTokenInfo, isOpen }: Props) => {
  const { getRoi } = useApy()
  const roi = useMemo(() => getRoi({ apy, balance, stakedTime: staked }), [balance, apy, getRoi, staked])
  const roiPrice = useMemo(() => isOpen ? (roi / stakedTokenInfo?.price) : roi, [roi, stakedTokenInfo, isOpen])
  const percentRoi = useMemo(() => (roi - balance) * 100, [balance, roiPrice])

  return (
    <Stack sx={(theme) => ({
      padding: '1px',
      background: `linear-gradient(${theme.palette.grey[300]}, ${theme.palette.grey[500]}40);`,
      borderRadius: '10px',
    })}>

      <Stack sx={(theme) => ({
        background: `linear-gradient(139.73deg,${theme.palette.grey[800]},${theme.palette.grey[700]});`,
        borderRadius: '10px',
        padding: '16px 24px',
        gap: 1,
        minHeight: 100
      }
      )}>
        <TransTypography variant='h1' fontWeight={800} color={'primary.main'} message='staking:apy:detail:title' />
        <Box>
          <TransTypography
            variant='subtitle'
            lineHeight={1}
            fontWeight={800}
            message='staking:quantityToken'
            values={{
              quantity: (roiPrice || 0).toFixed(2),
              symbol: stakedTokenInfo?.symbol

            }} />
          <Stack flexDirection={'row'}>
            (<PercentValue value={(percentRoi || 0).toFixed(2)} />)
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );

}

export default memo(RoiDetails);