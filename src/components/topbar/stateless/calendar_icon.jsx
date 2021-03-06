
import React from 'react';

const calendarStyles = {
  fill: 'none'
  , stroke: '#FFF'
  , strokeWidth: 1.5
  , strokeLinecap: 'round'
  , strokeLinejoin: 'round'
  , strokeMiterlimit: 10
};

const numStyles = {
  fill: '#FFF'
};

export default function({title}){
  return (
    <div className='svg-calendar-wp'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <title>{title}</title>
        <path style={calendarStyles} d="M1.5 8.9h21.7"/>
        <path style={numStyles} d="M6.9 19h1.6v-4.6c0-.2.3-.4.3-.6l-1 1-.1.1h-.1c-.1 0-.1 0-.2-.1l-.1-.1-.4-.6L9.3 12h.9v7h1.1v1H6.9v-1zm9.7-6.9c.4 0 .7.1 1 .2.3.1.5.3.8.5.2.2.4.4.5.7.1.3.2.6.2.9 0 .3-.1.5-.1.8-.1.3-.2.5-.3.7l-.5.6-.6.6-1.8 1.8c.2-.1.3 0 .5 0 .2-.1.3.1.5.1h2.1c.2 0 .1-.1.2 0s-.1.1-.1.2v.9h-5.5v-.5c0-.1.2-.2.2-.3l.3-.3 2.5-2.4c.2-.2.4-.4.5-.6.2-.2.3-.4.4-.5.1-.2.2-.4.3-.5.1-.2.1-.4.1-.6s0-.4-.1-.5c-.1-.2-.1-.3-.2-.4-.1-.1-.2-.2-.4-.2-.2-.1-.3-.1-.5-.1-.3 0-.6.1-.8.3-.2.2-.4.4-.4.6-.1.2-.1.2-.2.3-.1.1-.2.1-.3.1h-.2l-.7.1c.1-.4.2-.7.3-1 .2-.3.4-.5.6-.7.2-.2.5-.3.8-.4.3-.3.6-.4.9-.4z"/>
        <path style={calendarStyles} d="M20.5 3.6h3.3v20.2H1.5V3.6h3.3m3.7 0h8.7"/>
        <path style={calendarStyles} d="M5.3 1.5h3.3v4.2H5.3V1.5zm11.9 0h3.3v4.2h-3.3V1.5z"/>
      </svg>
    </div>

  );
};

