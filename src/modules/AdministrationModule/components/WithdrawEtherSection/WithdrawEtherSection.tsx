import { memo } from 'react'
import { CardSection } from '../CardSection';
import { WithdrawEtherForm } from '../WithdrawEtherForm';
import { useNetworkUtils } from '../../../../hooks/useNetworkUtils';
import { useEthers } from '@usedapp/core';
import TranslationByStyled from '../../../../components/TranslationByStyled/TranslationByStyled';
import OwnerAdminLayout from '../../../../layouts/OwnerAdminLayout';
import WithdrawEtherSummary from '../WithdrawEtherSummary/WithdrawEtherSummary';
import { Stack } from '@mui/material';
import { useTokenContext } from '../../context/TokenContext';
import { TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces';

const WithdrawEtherSection = () => {
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const { token } = useTokenContext()
  const network = getERC20Networks(chainId as number, token as TOKEN_TYPE_ENUM)

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