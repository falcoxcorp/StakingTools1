export enum ADDRESS_TOKEN_USD_ENUM {
  PIPI_CORE = '0x3034802fc4C9A278D0886eD77fd3F79fd789c898',
  PIPI_BSC = '0xf86E639Ff387b6064607201A7a98F2c2B2FEB05f',
  BTC = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", //eth
  BNB = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  CORE = "0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f",
  ETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  SOLANA = "So11111111111111111111111111111111111111112",
  BASE = '0xd07379a755a8f11b57610154861d694b2a0f615a',
  TRX = "0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3",
  GENESYS = "0xAa7aE83eb30DDdd14A017D4222121776317EA8Ba",
  POLIGON = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
}

export interface ICurrencyNetworks {
  token: string
  address: string,
  network: string
  icon: string
}

// icons
import btc_icon from "../assets/currency/btc.svg"
import matic_icon from "../assets/currency/matic.svg"
import eth_icon from "../assets/currency/eth.svg"
import bnb_icon from "../assets/currency/bnb.svg"
import trx_icon from "../assets/currency/trx.svg"
import sol_icon from "../assets/currency/sol.svg"
import pipi_icon from "../assets/currency/pipi.svg"
import base_icon from "../assets/currency/base.svg"
// import genesys_icon from "../assets/currency/genesys.svg"
import core_icon from "../assets/currency/core.svg"


//token list prices

export const TOKEN_PRICES: ICurrencyNetworks[] = [
  {
    token: "PIPI",
    address: ADDRESS_TOKEN_USD_ENUM.PIPI_CORE,
    icon: pipi_icon,
    network: 'core'
  },
  {
    token: "CORE",
    address: ADDRESS_TOKEN_USD_ENUM.CORE,
    icon: core_icon,
    network: 'core'
  },
  {
    token: "BNB",
    address: ADDRESS_TOKEN_USD_ENUM.BNB,
    icon: bnb_icon,
    network: 'bsc'
  },
  {
    token: 'PIPI',
    address: ADDRESS_TOKEN_USD_ENUM.PIPI_BSC,
    icon: pipi_icon,
    network: 'bsc'
  },
  {
    token: "TRX",
    address: ADDRESS_TOKEN_USD_ENUM.TRX,
    icon: trx_icon,
    network: 'bsc'
  },
  {
    token: "ETH",
    address: ADDRESS_TOKEN_USD_ENUM.ETH,
    icon: eth_icon,
    network: 'eth'
  },
  {
    token: "BTC",
    address: ADDRESS_TOKEN_USD_ENUM.BTC,
    icon: btc_icon,
    network: 'eth'
  },
  {
    token: "MATIC",
    address: ADDRESS_TOKEN_USD_ENUM.POLIGON,
    icon: matic_icon,
    network: 'polygon_pos'
  },

  {
    token: "SOLANA",
    address: ADDRESS_TOKEN_USD_ENUM.SOLANA,
    icon: sol_icon,
    network: 'solana'
  },
  /* {
    token: "GENESYS",
    address: ADDRESS_TOKEN_USD_ENUM.GENESYS,
    icon: genesys_icon,
    network: 'genesys-network'
  }, */
  {
    token: "BASE",
    address: ADDRESS_TOKEN_USD_ENUM.BASE,
    icon: base_icon,
    network: 'base'
  },

]