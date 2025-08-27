import { memo } from "react";
import { useTranslation } from "react-i18next";
import { NavLinkListItem } from ".";
import { STAKING_LINKS } from "../../routes/links/staking.link";

export const StackingLinks = () => {
  const { t } = useTranslation();

  return (
    <>
      {STAKING_LINKS?.map((link) => (
        <NavLinkListItem key={link?.title} {...link} title={t(link?.title)} />
      ))}
    </>
  );
};
export default memo(StackingLinks);
