import { memo } from "react";
import { Divider, Grid, InputAdornment } from "@mui/material";
import { FormTextField } from "../../../../components/FormFields";
import { FromSelectTokenAddressPaid } from "../FromSelectTokenPaid";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import { useTranslation } from "react-i18next";
import FormTextFieldSupply from "../FormTextFieldSupply/FormTextFieldSupply";
import { SecurityPoliticCheckBox } from "../SecurityPoliticCheckBox";
import { HeaderSection } from "../HeaderSection";
import { TaxCard } from "../TaxCard";
import AlertNote from "../../../../components/AlertNote/AlertNote";

type FactoryFormAdvancedProps = {
  _supply: number;
  paidByToken: boolean;
  chainId: number;
  watch: any;
  getTaxBuy: number[];
  getTaxSell: number[];
};

const FactoryFormAdvanced = ({
  _supply,
  paidByToken,
  chainId,
  getTaxBuy,
  getTaxSell,
}: FactoryFormAdvancedProps) => {
  const { t } = useTranslation("createToken");

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
        <FormTextField name="_name" label={t("form._name")} required />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="_symbol"
          label={t("form._symbol")}
          placeholder={t("form._eg_symbol")}
          required
        />
      </Grid>
      {/*  <Grid item xs={12} md={4}>
        <FormTextField
          name='_decimals'
          label={t('form._decimals')}
          required
          type='number'
          inputProps={{
            min: 1,
            max: 18,
            step: 1,
            inputMode: 'numeric', pattern: '[0-9]*'
          }}
        />
      </Grid> */}

      <Grid item xs={12}>
        <FormTextFieldSupply
          name="_supply"
          supply={_supply as number}
          label={t("form._supply")}
          placeholder={t("form._supply")}
          type="number"
          required
        />
      </Grid>

      <Grid item xs={12}>
        <FormTextField
          name="_tokenOwner"
          label={t("form.tokenOwner")}
          required
        />
      </Grid>

      <Grid item xs={12}>
        <HeaderSection title={t("taxWalletSetting")} />
      </Grid>

      {/* <Grid item xs={12}>
        <FormTextField name='_routerWallet' label={t('form._routerWallet')} required />
      </Grid> */}

      <Grid item xs={12}>
        <FormTextField
          name="_devWallet"
          label={t("form._devWallet")}
          required
        />
      </Grid>

      <Grid item xs={12}>
        <FormTextField
          name="_marketingWallet"
          label={t("form._marketingWallet")}
          required
        />
      </Grid>

      <Grid item xs={12}>
        <FormTextField
          name="_charityTaxWallet"
          label={t("form._charityTaxWallet")}
          required
        />
      </Grid>

      <Grid item xs={12}>
        <HeaderSection title={t("taxBuy")} />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextField
          name="_devTaxBuy"
          label={t("form._devTaxBuy")}
          placeholder={t("form._devTaxBuy")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="_marketingTaxBuy"
          label={t("form._marketingTaxBuy")}
          placeholder={t("form._marketingTaxBuy")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="_charityTaxBuy"
          label={t("form._charityTaxBuy")}
          placeholder={t("form._charityTaxBuy")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="_liquidityTaxBuy"
          label={t("form._liquidityTaxBuy")}
          placeholder={t("form._liquidityTaxBuy")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <HeaderSection title={t("taxSell")} />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextField
          name="_devTaxSell"
          label={t("form._devTaxSell")}
          placeholder={t("form._devTaxSell")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="_marketingTaxSell"
          label={t("form._marketingTaxSell")}
          placeholder={t("form._marketingTaxSell")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="_charityTaxSell"
          label={t("form._charityTaxSell")}
          placeholder={t("form._charityTaxSell")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="_liquidityTaxSell"
          label={t("form._liquidityTaxSell")}
          placeholder={t("form._liquidityTaxSell")}
          type="number"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TaxCard taxSell={getTaxSell} taxBuy={getTaxBuy} />
      </Grid>

      {/* <Grid item xs={12}>
        <FormSwitchField name='paidByToken' label={t('paidByToken')} />
      </Grid> */}

      {paidByToken && (
        <Grid item xs={12}>
          <FromSelectTokenAddressPaid
            name="tokenAddress"
            label={t("tokenAddress")}
            required
            chainId={chainId}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <Divider flexItem sx={{ mb: 2 }} />
        <AlertNote note={t("notes.audit")} />
        <AlertNote note={t("notes.note_creation")} severity="warning" />
      </Grid>

      <Grid item xs={12}>
        <SecurityPoliticCheckBox name="isVerify" />
      </Grid>
    </Grid>
  );
};

export default memo(FactoryFormAdvanced);
