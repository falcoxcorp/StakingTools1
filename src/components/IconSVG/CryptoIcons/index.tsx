import { BnbIcon } from './BNBIcon'
import { BTCIcon } from './BTCIcon'
import { ETHIcon } from './ETHIcon'
import { TRXIcon } from './TXRIcon'

const CRYPTOS = [
  {
    name: 'bnb',
    component: <BnbIcon />
  },
  {
    name: 'eth',
    component: <ETHIcon />
  },
  {
    name: 'trx',
    component: <TRXIcon />
  },
]

type CryptoIcon = {
  name: string
}

export const CryptoIcon = ({ name }: CryptoIcon) => {
  const path = CRYPTOS?.find(cry => cry.name === name)

  if (path)
    return (
      <>
        {path?.component}
      </>
    )

  return (
    <BTCIcon />
  )
}