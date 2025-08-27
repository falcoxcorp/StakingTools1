export enum METHODS_SERVICE {
  // GET
  getBalanceEther = 'getBalanceEther',
  getBalanceToken = 'getBalanceToken',
  getServiceActive = 'getServiceActive',
  getServicePayment = 'getServicePayment', // payment
  getServiceTokenPayment = 'getServiceTokenPayment', // payment
  services = 'services',
  owner = 'owner',
  fee='fee',
  adminWallet='adminWallet',

  // SET
  withdrawByToken = 'withdrawByToken',
  withdrawByEther = 'withdrawByEther',
  updateToken = 'updateToken',
  updateService = 'updateService',
  transferOwnership = 'transferOwnership',
  removeToken = 'removeToken',
  receiveTokens = 'receiveTokens',
  updateFee ='updateFee',
  updateAdminWallet='updateAdminWallet'
}
