export interface ISmartChef {
  stakedToken: string; // Token utilizado para hacer staking
  rewardToken: string; // Token ERC-20 o criptomoneda utilizada como recompensa  
  rewardPerBlock: number; // Recompensa por bloque
  poolLimitPerUser: number; // Límite de participación por usuario en el pool
  startBlock: Date; // Bloque de inicio del staking
  bonusEndBlock: Date; // Bloque de finalización del período de bonificación
  numberBlocksForUserLimit: {
    active: boolean,
    date: Date
  } // Número de bloques para el límite de participación por usuario

}

export interface IStakingContractInfo {
  stakingContact: string;
  rewardToken: string;
  stakedToken: string;
  startBlock: number;
  bonusEndBlock: number;
  rewardPerBlock: number;
  stakingActive: boolean;
}

export interface ITokenInfo {
  name: string;
  symbol: string;
  price: number;
  image: string;
}

export interface IStakingContractData {
  data: IStakingContractInfo[],
  originalData: IStakingContractInfo[],
  tokens: { [key: string]: ITokenInfo },
  totals: { [key: string]: number },
  apy: { [key: string]: number },
  sort: {
    onlyStaking: boolean,
    liveStaking: boolean
  }
}

export interface IStakingUserInfo {
  amount: number,
  rewardDebt: number
}