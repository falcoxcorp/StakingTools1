import { CardActions, CardContent, Collapse, IconButton, IconButtonProps, Stack, Typography, styled } from '@mui/material';
import { Fragment, memo } from 'react'
import useToggle from '../../../../../common/hooks/useToggle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import ActionItems from './ActionItems';
import { IStakingContractInfo } from '../../../interfaces/ISmartChef';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  color: theme.palette.primary.main,
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type ActionsType = {
  item: IStakingContractInfo
}
const Actions = ({ item }: ActionsType) => {
  const { t } = useTranslation('staking')
  const { isOpen, onToggle } = useToggle()
  return (
    <Fragment>
      <CardActions >

        <Stack flexDirection={'row'} justifyContent={'end'} alignItems={'center'} gap={1} width={'100%'}>

          <Typography color={'primary.main'} variant="h1">{t('simpleDetail')}</Typography>
          <ExpandMore
            size='small'
            expand={isOpen}
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Stack>

      </CardActions>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <CardContent>
          <ActionItems item={item} />
        </CardContent>
      </Collapse>
    </Fragment>
  );

}

export default memo(Actions);