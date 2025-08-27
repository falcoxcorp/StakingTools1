import { memo } from 'react'
import { FormPaper } from '../../../CreateTokenModule/components/CreateTokenForm/styled';
import { useCall, useEthers } from '@usedapp/core';
import { METHODS_ERC20 } from '../../../interfaces';
import TokenTable from './TokenTable';
import { Grid, Stack } from '@mui/material';
import TableHeaderTitle from '../../../../components/TableHeaderTitle/TableHeaderTitle';
import { useTranslation } from 'react-i18next';
import { ConditionContainer } from '../../../../components/ConditionContainer';
import { useSelectNetworkForm } from '../../hooks/useSelectNetworkForm';
import { Form } from '../../../../components/FormFields';
import { TokenTypeSelect } from '../../../../components/TokenTypeSelect';
import { NetworksByTokenSelect } from '../../../../components/NetworksByTokenSelect';
import { TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces';


const TokenListContent = () => {
  const { t } = useTranslation(['admin', 'common'])
  const { account } = useEthers()
  const { control, token, network } = useSelectNetworkForm()
 
  const { error, value } = useCall(account && network && {
    contract: network?.contractInstance,
    method: METHODS_ERC20?.GET_CONTRACT_TOKEN_BY_ADDRESS,
    args: [account]
  }) ?? {}

  return (
    <ConditionContainer active={!!account} alternative={<></>}>
      <Stack gap={2}>
        <TableHeaderTitle title={t('tokenList')} />

        <FormPaper>
          <Stack padding={{ xs: 1, md: 3 }}>
            <Form control={control} id='select-networks'>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12} md={6}>
                  <TokenTypeSelect name='token' label={t('common:selectToken')} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <NetworksByTokenSelect name='network' label={t('common:selectNetwork')} token={token as TOKEN_TYPE_ENUM} />
                </Grid>
              </Grid>
            </Form>
          </Stack>
          <TokenTable tokens={value?.[0]} error={error} network={network} token={token} />
        </FormPaper>
      </Stack>
    </ConditionContainer>
  );

}

export default memo(TokenListContent);