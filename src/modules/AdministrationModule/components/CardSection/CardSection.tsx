import { memo } from 'react'
import { ChildrenProps } from '../../../../common/types'
import { Content } from './styled'
import { Card, CardContent, Stack, Typography } from '@mui/material'

type CardSectionProps = ChildrenProps & {
  title: any,
  subtitle?: any
}

const CardSection = ({ title, subtitle, children }: CardSectionProps) => {

  return (
    <Card>
      <CardContent>
        <Content>
          <CardContent>
            <Stack>
              <Typography variant="h1">{title}</Typography>
              {
                subtitle &&
                <Typography variant="caption">{subtitle}</Typography>
              }
            </Stack>
            {
              children
            }
          </CardContent>
        </Content>
      </CardContent>
    </Card>
  );

}

export default memo(CardSection);