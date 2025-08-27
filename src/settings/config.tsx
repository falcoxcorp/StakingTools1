import { SERVICE_CONFIG } from "./config/services";
import { STAKING_CONFIG } from "./config/staking.factory";
import { CREATE_TOKEN_CONFIG } from "./config/token.factory";

export const config = {
  createToken: CREATE_TOKEN_CONFIG,
  service: SERVICE_CONFIG,
  staking: STAKING_CONFIG,
};
