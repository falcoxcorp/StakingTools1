import { BigNumber, ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";

export const onConvertSupply = (num: number): string => {
  const suffixes: any = {
    // Key: 0 (no zeros) - Represents ones
    0: '',
    // Key: 3 (one zero) - Represents thousands (kilo)
    3: 'K',
    // Key: 6 (two zeros) - Represents millions (mega)
    6: 'M',
    // Key: 9 (three zeros) - Represents billions (giga) - Changed from "B" for consistency
    9: 'G',
    // Key: 12 (four zeros) - Represents trillions (tera)
    12: 'T',
    // Key: 15 (five zeros) - Represents quadrillions (peta)
    15: 'P',
    // Key: 18 (six zeros) - Represents quintillions (exa)
    18: 'E',
    // Key: 21 (seven zeros) - Represents sextillions (zetta)
    21: 'Z',
    // Key: 24 (eight zeros) - Represents septillions (yotta)
    24: 'Y',
    // Key: 27 (nine zeros) - Represents octillions
    27: 'X',
    // Key: 30 (ten zeros) - Represents nonillions
    30: 'W',
    // Key: 33 (eleven zeros) - Represents decillions
    33: 'V',
    // Key: 36 (twelve zeros) - Represents undecillions
    36: 'U',
    // Add more abbreviations for larger numbers as needed
  };

  // Verifica si el número es menor a mil
  if (num < 1000) {
    return String(num);
  }

  const length = String(num).length;
  const power = Math.floor(length / 3) * 3;
  const divisor = Math.pow(10, power);
  const sufijo = suffixes[power];
  const result = (num / divisor).toFixed(1);
  return `${result}${sufijo}`;
}


export const getBigNumberSupply = (_supply: number) => {
  return ethers.BigNumber.from(_supply.toString())
}

export const getParseEther = (amount: number) => {
  return ethers.utils.parseEther(amount.toString())
}

export const getParseWeiToEther = (amount: number | BigNumber) => {
  return formatEther(amount.toString())
}