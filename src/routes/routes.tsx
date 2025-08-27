import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotResultPage from "../pages/NotResultPage";
import { CreateToken, TokenManager, TokenList, ConfigManager, SecurityPoliticPage, ContractEdit, CreateStakingPage, StakingPool, StakingOwnerList, StakingOwnerConfig, ServiceManager } from "./pages_lazy";
import { MainApp } from "./main.routes";


export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainApp />} >
      <Route index element={<StakingPool />} />
      <Route path="/security_politic" element={<SecurityPoliticPage />} />
      <Route path="/tokens_list" element={<TokenList />} />
      <Route path="/create_token/:token" element={<CreateToken />} />
      {/* <Route path="/create_token/advanced" element={<CreateToken />} /> */}
      <Route path='/admin/token_manager' element={<TokenManager />} />
      <Route path='/admin/settings' element={<ConfigManager />} />
      <Route path='/admin/service' element={<ServiceManager />} />
      <Route path='/contract/:_token/:_address' element={<ContractEdit />} />

      <Route path='/staking/create' element={<CreateStakingPage />} />
      <Route path='/staking/pools' element={<StakingPool />} />
      <Route path='/staking/owner/list' element={<StakingOwnerList />} />
      <Route path='/staking/owner/:address' element={<StakingOwnerConfig />} />

      <Route path='*' element={<NotResultPage />} />
    </Route>
  )
);

