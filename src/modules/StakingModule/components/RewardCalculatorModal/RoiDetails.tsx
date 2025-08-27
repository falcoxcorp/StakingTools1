import { Box, Stack } from '@mui/material';
import { memo, useMemo } from 'react'
import { TransTypography } from '../../../../components/TransTypography';
import { PercentValue } from '../../../../components/PercentValue';
import { getBlockPerYear, getTimeByBlock } from '../../../../utils/block-time';
import { useEthers } from '@usedapp/core';
import { ITokenInfo } from '../../interfaces/ISmartChef';

type Props = {
  balance: number,
  staked: number
  apy: number
  stakedTokenInfo: ITokenInfo
  isOpen: boolean
}
const RoiDetails = ({ balance, staked, apy, stakedTokenInfo, isOpen }: Props) => {
  const { chainId } = useEthers()
  const blockTime = getTimeByBlock(chainId as number)
  const blockPerYear = getBlockPerYear(chainId as number)
  const blockPerDay = staked / blockTime
  const roi = useMemo(() => Number(balance) * ((1 * (apy / 100)) ** (blockPerDay / blockPerYear)) - Number(balance), [balance, apy, staked, blockTime])


  const getRoi = useMemo(() => isOpen ? (roi / stakedTokenInfo?.price) : roi, [roi, stakedTokenInfo])
  const percentRoi = useMemo(() => getRoi * 100 / balance, [balance, getRoi])

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
              quantity: (getRoi || 0).toFixed(2),
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