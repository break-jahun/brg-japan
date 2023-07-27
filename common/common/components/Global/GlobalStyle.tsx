import React, { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
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
        font-family: Pretendard, 'Noto Sans KR', sans-serif;
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
