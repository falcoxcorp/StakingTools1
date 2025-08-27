import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLinkListItem } from '.'
import { MARKETPLACE_LINKS } from '../../routes/links/marketplace.link'

export const MarketplaceLinks = () => {
  const { t } = useTranslation()

  return (
    <>
      {
        MARKETPLACE_LINKS?.map(link => (
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
export default memo(MarketplaceLinks);