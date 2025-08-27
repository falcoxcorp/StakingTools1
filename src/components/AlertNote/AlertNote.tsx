import { memo, useState } from 'react'
import { Alert, Box, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

type AlertNoteProps = {
  note: string,
  severity?: 'success' | 'info' | 'warning' | 'error';
}

const AlertNote = ({ note, severity = 'success' }: AlertNoteProps) => {

  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          variant='standard'
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {note}
        </Alert>
      </Collapse>
    </Box>
  );

}

export default memo(AlertNote);