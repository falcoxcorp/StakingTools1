import { memo } from 'react'
import { useEthers } from '@usedapp/core';
import WithdrawEtherSummary from '../WithdrawEtherSummary/WithdrawEtherSummary';
import { Stack } from '@mui/material';
import OwnerAdminLayout from '../../../../../layouts/OwnerAdminLayout';
import { CardSection } from '../../CardSection';
import TranslationByStyled from '../../../../../components/TranslationByStyled/TranslationByStyled';
import { WithdrawEtherForm } from '..';
import { useNetworkUtils } from '../../../../../hooks/useNetworkUtils';

const WithdrawEtherSection = () => {
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const network = getERC20Networks(chainId as number)

  return (
    <OwnerAdminLayout>
      <CardSection
        title={<TranslationByStyled message={'admin:ether:withdrawEther:title'} values={{ crypto: network?.name }} />}
        subtitle={<TranslationByStyled message={'admin:ether:withdrawEther:subtitle'} values={{ crypto: network?.name }} />}
      >
        <Stack pt={1} gap={1}>
          <WithdrawEtherSummary />
          <WithdrawEtherForm />
        </Stack>
      </CardSection>
    </OwnerAdminLayout>
  )

}

export default memo(WithdrawEtherSection);