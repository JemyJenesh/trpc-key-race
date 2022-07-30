import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-lg mx-auto">{children}</div>;
};

export default Layout;
