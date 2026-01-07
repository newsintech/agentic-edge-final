"use client";

import React from "react";

type AmazonButtonProps = {
  asin: string;
  countryCode: string;
  children: React.ReactNode;
};

const AmazonButton: React.FC<AmazonButtonProps> = ({ asin, countryCode, children }) => {
  const map: Record<string, { domain: string; tag: string }> = {
    IN: { domain: "amazon.in", tag: "agenticedge-21" },
    US: { domain: "amazon.com", tag: "usagenticedge-20" },
    UK: { domain: "amazon.co.uk", tag: "amkvin-21" },
    CA: { domain: "amazon.ca", tag: "usagenticedge-20" },
    DE: { domain: "amazon.de", tag: "usagenticedge-20" },
    FR: { domain: "amazon.fr", tag: "usagenticedge-20" },
    IT: { domain: "amazon.it", tag: "usagenticedge-20" },
    ES: { domain: "amazon.es", tag: "usagenticedge-20" },
    NL: { domain: "amazon.nl", tag: "usagenticedge-20" },
  };

  const { domain, tag } = map[countryCode] || map.US;
  const link = `https://${domain}/dp/${asin}?tag=${tag}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
    >
      {children}
    </a>
  );
};

export default AmazonButton;
