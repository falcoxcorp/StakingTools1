import { memo } from 'react'
import { Section } from './styled';
import { Chip } from '@mui/material';
type HeaderSectionProps = {
  title: string
}

const HeaderSection = ({ title }: HeaderSectionProps) => {

  return (
    <Section>
      <Chip label={title} color='primary' />
    </Section>
  );

}

export default memo(HeaderSection);