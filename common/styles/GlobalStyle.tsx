import React, { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      /* @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'); */
      @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        src: local(''),
          url('/font/Pretendard-Black-subset.woff2') format('woff2'),
          url('/font/Pretendard-Black-subset.woff') format('woff'),
          url('/font/Pretendard-Black-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        src: local(''),
          url('/font/Pretendard-ExtraBold-subset.woff2') format('woff2'),
          url('/font/Pretendard-ExtraBold-subset.woff') format('woff'),
          url('/font/Pretendard-ExtraBold-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        src: local(''),
          url('/font/Pretendard-Bold-subset.woff2') format('woff2'),
          url('/font/Pretendard-Bold-subset.woff') format('woff'),
          url('/font/Pretendard-Bold-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        src: local(''),
          url('/font/Pretendard-SemiBold-subset.woff2') format('woff2'),
          url('/font/Pretendard-SemiBold-subset.woff') format('woff'),
          url('/font/Pretendard-SemiBold-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        src: local(''),
          url('/font/Pretendard-Medium-subset.woff2') format('woff2'),
          url('/font/Pretendard-Medium-subset.woff') format('woff'),
          url('/font/Pretendard-Medium-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        src: local(''),
          url('/font/Pretendard-Regular-subset.woff2') format('woff2'),
          url('/font/Pretendard-Regular-subset.woff') format('woff'),
          url('/font/Pretendard-Regular-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        src: local(''),
          url('/font/Pretendard-Light-subset.woff2') format('woff2'),
          url('/font/Pretendard-Light-subset.woff') format('woff'),
          url('/font/Pretendard-Light-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        src: local(''),
          url('/font/Pretendard-ExtraLight-subset.woff2') format('woff2'),
          url('/font/Pretendard-ExtraLight-subset.woff') format('woff'),
          url('/font/Pretendard-ExtraLight-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        src: local(''),
          url('/font/Pretendard-Thin-subset.woff2') format('woff2'),
          url('/font/Pretendard-Thin-subset.woff') format('woff'),
          url('/font/Pretendard-Thin-subset.ttf') format('truetype');
        font-display: block;
      }

      @font-face {
        font-family: 'Dohyeon';
        src: local(''), url('/font/Do-hyeon.woff2') format('woff2'),
          url('/font/Do-hyeon.woff') format('woff'),
          url('/font/Do-hyeon.ttf') format('truetype');
        font-display: block;
      }

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      input,
      textarea,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
      }

      html {
        font-family: Pretendard, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        background-color: transparent;
        text-decoration: none;
        outline: none;
        color: inherit;
      }

      ol,
      ul {
        list-style: none;
      }

      button {
        font: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        background: none;
        padding: 0;
        user-select: none;
        cursor: pointer;
        white-space: normal;
        letter-spacing: inherit;
      }

      input {
        outline: none;
        border: none;
      }
    `}
  />
);

export default GlobalStyle;
