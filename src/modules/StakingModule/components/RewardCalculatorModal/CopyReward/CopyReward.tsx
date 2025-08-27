import { memo } from 'react'
import { IconButton, Stack, Tooltip } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useTranslation } from 'react-i18next';
import clipboardCopy from 'clipboard-copy';
import toast from 'react-hot-toast';

type CopyRewardProps = {
  balance: number
}

const CopyReward = ({ balance }: CopyRewardProps) => {
  const { t } = useTranslation('staking')

  const handleCopyClick = async () => {
    try {
      //@ts-ignore
      await clipboardCopy(balance);
      toast.success(t('clipboardCopy.success'))
    } catch (error) {
      toast.error(t('clipboardCopy.error'));
    }
  };

  return (
    <Stack direction={'row'} gap={1} alignItems={'center'} justifyContent={'center'}>
      <Tooltip title={t('copyBalance')}>
        <IconButton onClick={handleCopyClick}>
          <ContentCopyOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );

}

export default memo(CopyReward);