import React from 'react';

//region Implementation

export default function VippsLogo({className}: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#FF5B24"
        d="M0 0h24v24H0z"
      />
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        d="M14.5748 9.81743c.9175 0 1.7038-.69657 1.7038-1.69778h.0002c0-1.00145-.7865-1.69777-1.704-1.69777-.9173 0-1.7035.69632-1.7035 1.69777 0 1.00121.7862 1.69778 1.7035 1.69778Zm2.228 2.74317c-1.1361 1.4799-2.3374 2.5031-4.4563 2.5031h.0002c-2.1618 0-3.84401-1.3061-5.15446-3.2216-.52439-.7838-1.33257-.9578-1.92239-.5442-.54598.3919-.67671 1.2191-.17464 1.9375C6.90799 16 9.41975 17.6106 12.3465 17.6106c2.6869 0 4.7839-1.3059 6.4218-3.4828.6114-.8053.5896-1.6325 0-2.0897-.5462-.4358-1.3543-.2827-1.9655.5225Z"
        clipRule="evenodd" />
    </svg>
  );
}

//endregion