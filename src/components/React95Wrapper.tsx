"use client";

import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body, input, select, textarea, Button, button {
  font-family: var(--font-ms-sans-serif), 'ms_sans_serif', sans-serif;
}
`;

interface React95WrapperProps {
  children: React.ReactNode;
}

const React95Wrapper: React.FC<React95WrapperProps> = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>{children}</ThemeProvider>
  </>
);

export default React95Wrapper;
