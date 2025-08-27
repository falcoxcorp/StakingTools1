import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLinkListItem } from '.'
import { LAUNCHPAD_LINKS } from '../../routes/links/launchpad.link'

export const LaunchpadLinks = () => {
  const { t } = useTranslation()

  return (
    <>
      {
        LAUNCHPAD_LINKS?.map(link => (
          <NavLinkListItem
            key={link?.title}
            {...link}
            title={t(link?.title)}
            target={link?.external ? '_blank':'none'}
          />
        )
        )
      }
    </>
  )
}
export default memo(LaunchpadLinks);