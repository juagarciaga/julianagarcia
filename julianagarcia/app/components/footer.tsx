"use client";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "./buttons/custom.button";
import { bgWater } from "../constants";

export default function CustomFooter() {
  const [isShow, setIsShow] = useState(true);

  const footerStyle = {
    background: "white",
    color: "black",
    bottom: "0",
    width: "100vw",
    fontSize: "12px",
    padding: "10px",
    display: isShow ? "inline-grid" : "none",
  };
  const btnStyle = {
    background: bgWater,
    color: "white",
    padding: "5px 15px",
    margin: "5px 0 0",
  };

  return (
    <footer style={footerStyle} className="fixed w-full ">
      <p style={{ margin: "0 0 3px" }}>
        We improve our products and advertising by using Microsoft Clarity to
        see how you use our website. By using our site, you agree that we and
        Microsoft can collect and use this data.
      </p>

      <p>
        We partner with Microsoft Clarity and Microsoft Advertising to capture
        how you use and interact with our website through behavioral metrics,
        heatmaps, and session replay to improve and market our
        products/services. Website usage data is captured using first and
        third-party cookies and other tracking technologies to determine the
        popularity of products/services and online activity. Additionally, we
        use this information for site optimization, fraud/security purposes, and
        advertising. For more information about how Microsoft collects and uses
        your data, visit the{" "}
        <Link href="https://privacy.microsoft.com/en-US/privacystatement">
          {" "}
          Microsoft Privacy Statement
        </Link>
        .
      </p>
      <CustomButton label='Accept' 
      customFn={() => setIsShow(!isShow)} 
      />
    </footer>
  );
}
