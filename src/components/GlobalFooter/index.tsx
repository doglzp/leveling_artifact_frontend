import React from "react";
import "./index.css"

export const GlobalFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
      <div
        className={"global-footer"}
        style={{
          textAlign: "center",
          paddingBlockStart: 12,
        }}
      >
        <div>© {currentYear} 升级神器</div>
        <a key={"github"} href={"https://github.com/doglzp"} target={"_blank"}>
          作者：林某某
        </a>
      </div>
    );
};
