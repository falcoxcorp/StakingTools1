import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLinkListItem } from '.'
import { PRIVATE_SALE_LINKS } from '../../routes/links/private-sale.link'

export const PrivateSaleLinks = () => {
  const { t } = useTranslation()

  return (
    <>
      {
        PRIVATE_SALE_LINKS?.map(link => (
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
export default memo(PrivateSaleLinks);