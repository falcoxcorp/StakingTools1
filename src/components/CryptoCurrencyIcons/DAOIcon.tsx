import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react'


const DAOIcon = (props: SvgIconProps) => {

  return (
    <SvgIcon {...props}>
      <svg
        id="DAOIcon"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.73 24"
        fill='currentColor'
      >
        <defs>
          <style>{".cls-1{fill:#ff9211}"}</style>
        </defs>
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            d="M10.37 2.49L2.22 7.24v9.51l8.14 4.76 8.14-4.76V7.24l-8.13-4.75zm.34-2.4a.687.687 0 00-.68 0L.34 5.75c-.21.12-.34.35-.34.6v11.31c0 .25.13.48.34.6l9.68 5.65c.21.12.47.12.68 0l9.68-5.65c.21-.12.34-.35.34-.6V6.35c0-.25-.13-.48-.34-.6L10.71.09z"
            fillRule="evenodd"
            fill="#ff9211"
          />
          <path
            className="cls-1"
            d="M10.37 5.93L5.18 8.96v6.07l5.16 3.01s.03.04.03.06v1.04c0 .05-.06.09-.1.06l-5.86-3.42a.513.513 0 01-.26-.45V8.66c0-.19.1-.36.26-.45l5.71-3.33c.16-.09.35-.09.51 0l5.88 3.42s.05.09 0 .12c-.35.21-.53.3-.91.52-.02.01-.05.01-.07 0l-5.16-3.01z"
          />
          <path
            className="cls-1"
            d="M11.22 12.13s.01-.05.04-.06l5.16-2.78s.1 0 .1.06v6.76s-.01.05-.03.06l-5.16 3.03s-.1 0-.1-.06v-7.02z"
          />
        </g>
      </svg>
    </SvgIcon>
  );

}

export default memo(DAOIcon);