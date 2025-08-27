import { Stack, styled } from "@mui/material";

export const LogoSection = styled(Stack)(({ theme }) => ({
  color: theme.palette.primary.main,
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  gap:8
})) 