import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = React.useState("")

  const handlePopoverOpen = (event, newText) => {
    setAnchorEl(event.currentTarget);
    setText(newText);
  };


  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div id="div">
      <Typography
       id="a"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => handlePopoverOpen(e, 'Testando o primeiro btn')}
        onMouseLeave={handlePopoverClose}
      >
      ver frases...
      </Typography>
      <Typography
       id="a"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => handlePopoverOpen(e, 'Testando o segundo btn')}
        onMouseLeave={handlePopoverClose}
      >
        ver frases...
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
       <Typography sx={{ p: 1 }}>{text}</Typography>
      </Popover>
    </div>
  );
}
