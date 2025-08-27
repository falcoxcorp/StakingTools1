import { memo } from 'react' 
import { LogoSection } from './styled';
import { NavbarLogo } from '../NavbarLogo';

const Logo = () => { 
  return (
    <LogoSection>
      <NavbarLogo height={88} width={180}/>
    </LogoSection>
  );

}

export default memo(Logo);