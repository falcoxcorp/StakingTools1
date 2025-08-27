import { memo } from "react";
import { MenuList } from "./styled";
import { useTranslation } from "react-i18next";
import { NavLinkListItem } from ".";
import MenuItem from "./MenuItem/MenuItem";
import CreateTokenLinks from "./CreateTokenLinks";
import AdminLinks from "./AdminLinks";
import OwnerAdminLayout from "../OwnerAdminLayout";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Divider } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import StackingLinks from "./StackingLinks";
import { ServiceLinks } from "./ServiceLinks";
import OwnerServiceLayout from "../OwnerServiceLayout";
import { CustomNavLink } from "./NavLinkListItem";
import { NavbarLogo } from "../../components/NavbarLogo";

type MenuProps = {
  onClose: () => void;
};
const Menu = ({ onClose }: MenuProps) => {
  const { t } = useTranslation("menu");

  return (
    <MenuList
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      aria-labelledby="nested-list-subheader"
    >
      <MenuItem onClose={onClose}>
        <CustomNavLink to='/' sx={{ mx: 'auto' }}>
          <NavbarLogo height={76} width={160} />
        </CustomNavLink>
      </MenuItem>


      <MenuItem title={t("create_token.title")} isExpander onClose={onClose}>
        <CreateTokenLinks />
      </MenuItem>

      {/*   <MenuItem title={t('marketplace.title')} isExpander onClose={onClose}>
        <MarketplaceLinks />
      </MenuItem>

      <MenuItem title={t('launchpad.title')} isExpander onClose={onClose}>
        <LaunchpadLinks />
      </MenuItem>

      <MenuItem title={t('privateSale.title')} isExpander onClose={onClose}>
        <PrivateSaleLinks />
      </MenuItem>

      <MenuItem title={t('lockTokens.title')} isExpander onClose={onClose}>
        <LuckTokens />
      </MenuItem> */}

      <MenuItem title={t("staking.title")} isExpander onClose={onClose}>
        <StackingLinks />
      </MenuItem>

      <OwnerAdminLayout>
        <MenuItem title={t("admin.title")} isExpander onClose={onClose}>
          <AdminLinks />
        </MenuItem>
      </OwnerAdminLayout>

      <OwnerServiceLayout>
        <MenuItem title={t("admin.settings")} isExpander onClose={onClose}>
          <ServiceLinks />
        </MenuItem>
      </OwnerServiceLayout>

      {/*  <MenuItem onClose={onClose}>
        <NavLinkListItem to='/dex_view' disabled icon={<ViewInArOutlinedIcon />} title={t('dexView')} />
      </MenuItem>

      <MenuItem onClose={onClose}>
        <NavLinkListItem to='/kyc' disabled icon={<KycIcon />} title={t('kyc')} />
      </MenuItem>

      <MenuItem onClose={onClose}>
        <NavLinkListItem target='_blank' to={ import.meta.env.VITE_APP_AIDROP || 'https://aidrop.pipitool.com'} icon={<WifiTetheringIcon />} title={t('airdrop.pipi')} />
      </MenuItem> */}

      <Divider flexItem />

      <MenuItem onClose={onClose}>
        <NavLinkListItem
          to="https://pipi-lol.gitbook.io/untitled-1/pipilaunchpad"
          target="_blank"
          icon={<DescriptionOutlinedIcon />}
          title={t("whitePaper")}
        />
      </MenuItem>

      <MenuItem onClose={onClose}>
        <NavLinkListItem
          to="/security_politic"
          icon={<SecurityOutlinedIcon />}
          title={t("securityPolitic")}
        />
      </MenuItem>
    </MenuList>
  );
};

export default memo(Menu);
