import { lazy } from 'react';

const loadFormPage = () => import('../pages/FormPage');
export const FormPage = lazy(loadFormPage);

const loadHomePage = () => import('../pages/HomePage');
export const HomePage = lazy(loadHomePage);

const loadCreateToken = () => import('../pages/block_chain/CreateToken');
export const CreateToken = lazy(loadCreateToken);


// STAKING
const loadTokenList = () => import('../pages/user/TokenList');
export const TokenList = lazy(loadTokenList);

const loadStakingOwnerList = () => import('../pages/staking/StakingOwnerList');
export const StakingOwnerList = lazy(loadStakingOwnerList);

const loadStakingPool = () => import('../pages/staking/StakingPool');
export const StakingPool = lazy(loadStakingPool);



const loadTokenManager = () => import('../pages/admin/TokenManager');
export const TokenManager = lazy(loadTokenManager);

const loadConfigManager = () => import('../pages/admin/ConfigManager');
export const ConfigManager = lazy(loadConfigManager);

const loadServiceManager = () => import('../pages/admin/ServiceManager');
export const ServiceManager = lazy(loadServiceManager);



const loadContractEdit = () => import('../pages/user/ContractEdit');
export const ContractEdit = lazy(loadContractEdit);

const loadSecurityPoliticPage = () => import('../pages/common/SecurityPoliticPage');
export const SecurityPoliticPage = lazy(loadSecurityPoliticPage);


const loadCreateStakingPage = () => import('../pages/staking/CreateStaking');
export const CreateStakingPage = lazy(loadCreateStakingPage);

const loadStakingOwnerConfig = () => import('../pages/staking/StakingOwnerConfig');
export const StakingOwnerConfig = lazy(loadStakingOwnerConfig);