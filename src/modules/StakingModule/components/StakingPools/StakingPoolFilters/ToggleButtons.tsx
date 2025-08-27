import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import {memo, useState} from 'react'
import {ViewModule, ViewList} from '@mui/icons-material'

const ToggleButtons = () => {

  const [view, setView] = useState('grid');

  const handleChange = (_event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      size='small'
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="grid" aria-label="grid">
        <ViewModule />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list">
        <ViewList />
      </ToggleButton>
    </ToggleButtonGroup>
  );

}

export default memo(ToggleButtons);