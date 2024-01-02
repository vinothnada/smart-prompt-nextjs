import "@styles/globals.css";
import React, { FC, ReactNode, useState } from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: "Smart Prompt",
  description: "Discover and Share AI Prompts",
};

const Rootlayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          <Provider />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
