import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
      <div style={{ height: "100vh", overflow: "auto" }}>
        {children}
      </div>
    );
  }

export default Container;
