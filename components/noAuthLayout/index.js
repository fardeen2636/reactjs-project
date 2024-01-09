import React from "react";
import FooterPage from "../layout/footer";


function NoAuthLayout({ children }) {
  return (
    <>
      {children}
      <FooterPage />
    </>
  );
}

export default NoAuthLayout;