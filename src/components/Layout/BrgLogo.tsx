type Props = {
  color?: 'white' | 'black';
};

function BrgLogo(props: Props) {
  const { color = 'white' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="28"
      viewBox="0 0 64 28"
      fill="none"
    >
      <g>
        <path
          d="M15.7626 0.0303345H0V22.3119H15.7626V0.0303345Z"
          fill="url(#paint0_linear_8_478)"
        />
        <path
          d="M28.2648 5.64251C32.0338 5.64251 34.3719 8.03109 34.3719 11.7303V16.219C34.3719 19.9183 32.0338 22.3322 28.2648 22.3322H26.9417C23.1677 22.3322 20.8572 19.9183 20.8572 16.219V0H24.6813V6.06253C25.4331 5.79939 26.2951 5.64251 27.2274 5.64251H28.2673H28.2648ZM26.9417 9.39237C25.5885 9.39237 24.7063 10.364 24.6788 11.7303V16.1102C24.6788 17.5297 25.5609 18.552 26.9417 18.552H28.2648C29.6431 18.552 30.6029 17.5272 30.6029 16.1102V11.8341C30.6029 10.4146 29.6456 9.39237 28.2648 9.39237H26.9417Z"
          fill={color}
          //   style={{
          //     ...(color === 'white' && {
          //       transitionProperty: 'fill',
          //       transitionDelay: '500ms',
          //     }),
          //   }}
        />
        <path
          d="M47.8992 5.95878H48.3402V10.0249H47.8992C44.7492 10.0249 40.9576 12.8614 40.9576 15.3815V22.3347H36.9305V5.51093H40.9576V9.05078C42.2056 7.00632 45.1426 5.95625 47.8992 5.95625V5.95878Z"
          fill={color}
          //   style={{
          //     ...(color === 'white' && {
          //       transitionProperty: 'fill',
          //       transitionDelay: '500ms',
          //     }),
          //   }}
        />
        <path
          d="M64 5.64252V22.3575C64 25.8999 61.8399 28 58.7199 28H51.2897V24.3514H58.121C59.4241 24.3514 60.4641 23.486 60.4641 22.0159V21.8059H55.625C52.7131 21.8059 50.35 19.7311 50.35 15.9002V11.5456C50.35 7.71228 52.7131 5.64252 55.625 5.64252H63.9975H64ZM60.439 9.29117H56.432C55.1339 9.29117 54.0688 10.4981 54.0688 11.9404V15.4802C54.0688 16.9503 55.1339 18.1572 56.432 18.1572H60.439V9.29117Z"
          fill={color}
          //   style={{
          //     ...(color === 'white' && {
          //       transitionProperty: 'fill',
          //       transitionDelay: '500ms',
          //     }),
          //   }}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_8_478"
          x1="-2.80669"
          y1="17.4032"
          x2="18.6719"
          y2="5.1186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3492C3" />
          <stop offset="0.91" stopColor="#552278" />
          <stop offset="1" stopColor="#532374" />
        </linearGradient>
        {/* <clipPath id="clip0_8_478">
          <rect width="64" height="28" fill="white" />
        </clipPath> */}
      </defs>
    </svg>
  );
}

export default BrgLogo;
