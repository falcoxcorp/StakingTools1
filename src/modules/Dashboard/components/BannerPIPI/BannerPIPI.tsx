import { memo } from 'react'
import banner from '../../../../assets/banner.jpg'


const BannerPIPI = () => {

  return (
    <img
      src={`${banner}?w=164&h=164&fit=crop&auto=format`}
      alt={'banner'}
      loading="lazy"
    />
  );

}

export default memo(BannerPIPI);