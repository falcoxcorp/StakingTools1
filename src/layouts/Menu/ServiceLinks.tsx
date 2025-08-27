import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLinkListItem } from '.'
import { SERVICE_LINKS } from '../../routes/links/service.link'

export const ServiceLinks = () => {
  const { t } = useTranslation()

  return (
    <>
      {
        SERVICE_LINKS?.map(link => (
          <NavLinkListItem
            key={link?.title}
            {...link}
            title={t(link?.title)}
          />
        )
        )
      }
    </>
  )
}
export default memo(ServiceLinks);