import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLinkListItem } from '.'
import { ADMIN_LINKS } from '../../routes/links/admin.link'

export const AdminLinks = () => {
  const { t } = useTranslation()

  return (
    <>
      {
        ADMIN_LINKS?.map(link => (
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
export default memo(AdminLinks);