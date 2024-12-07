import React from "react";

const Preview = ({ html, css, js }) => {
  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
    </html>
  `;

  return (
    <iframe
      title="Code Preview"
      srcDoc={iframeSrcDoc}
      className="w-full h-full border-none"
      sandbox="allow-scripts"
    />
  );
};

export default Preview;