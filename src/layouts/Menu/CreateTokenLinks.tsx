import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CREATE_TOKEN_LINKS } from '../../routes/links/create-token.link'
import { NavLinkListItem } from '.'

export const CreateTokenLinks = () => {
  const { t } = useTranslation()

  return (
    <>
      {
        CREATE_TOKEN_LINKS?.map(link => (
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
export default memo(CreateTokenLinks);