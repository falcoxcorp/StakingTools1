import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLinkListItem } from '.'
import { LUCK_TOKENS_LINKS } from '../../routes/links/luck-tokens.link'

export const LuckTokens = () => {
  const { t } = useTranslation()

  return (
    <>
      {
        LUCK_TOKENS_LINKS?.map(link => (
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
export default memo(LuckTokens);