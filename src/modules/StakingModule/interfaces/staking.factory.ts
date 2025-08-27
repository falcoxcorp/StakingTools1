export enum METHODS_STAKING_FACTORY {
  DEPLOY_PAID_BY_TOKEN = 'deployStakingPaidByToken',
  DEPLOY_PAID_ETHER = 'deployStakingPaidByEther',
  OWNER = 'owner',
  UPDATE_SERVICE = 'updateServiceContractAddress',

  // GETS
  GET_DEPLOYED_STAKING_CONTRACT = 'getDeployedStakingContracts',
  GET_DEPLOYED_STAKING_CONTRACT_BY_OWNER = 'getDeployedStakingContractsByOwner',
  getDeployedStakingContractsByOwnerInfo = 'getDeployedStakingContractsByOwnerInfo',
  getDeployedStakingContractsInfo = 'getDeployedStakingContractsInfo',

  stakedTokenAmount = 'stakedTokenAmount', //total de token en staking
  pendingReward = 'pendingReward', //obtener recompensa
  hasUserLimit = 'hasUserLimit', // tiempo limite de nuevos usuarios
  userInfo = 'userInfo', // tiempo limite de nuevos usuarios
  rewardPerBlock = 'rewardPerBlock', // tiempo limite de nuevos usuarios

  stakedToken ='stakedToken',
  rewardToken ='rewardToken',
  poolLimitPerUser ='poolLimitPerUser',

  owner='owner',

  //SET
  updateStartAndEndBlocks = 'updateStartAndEndBlocks', //owner act startBlock, endBlock
  updateRewardPerBlock = 'updateRewardPerBlock', //owner act recompenzas por bloque
  updatePoolLimitPerUser = 'updatePoolLimitPerUser', //owner act fecha limite de nuevos usuarios,
  stopReward = 'stopReward', //owner detiene staking,
  recoverToken = 'recoverToken', //owner recupera tokens enviados por error
  emergencyRewardWithdraw = 'emergencyRewardWithdraw', //owner retira los token en emergencia
  emergencyWithdraw='emergencyWithdraw', // usuario retira todos sus tokens
  withdraw='withdraw', // el usuario retira sus tokens y recolecta las recompensas
  initialize='initialize'// owner inicializa el staking nuevamente
}
