import { Avatar, styled } from "@mui/material";

export const LargeAvatar = styled(Avatar)(() => ({
  width: 24,
  height: 24,
  img: {
    height: '200%'
  }
}));

export const SmallAvatar = styled(Avatar)(() => ({
  width: 16,
  height: 16,
  img: {
    height: '200%'
  }
}));