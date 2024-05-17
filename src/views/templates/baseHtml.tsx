export const BaseHTML = ({ children }: Html.PropsWithChildren) => {
  return (
    <html>
      <head>
        <title>Template Bexlite Stack</title>
        <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/disable-element.js"></script>
        <link rel="icon" type="image/png" href="/public/favicon.png" />
        <link rel="stylesheet" href="/public/globals.css" />
      </head>
      <body>{children}</body>
    </html>
  );
};
