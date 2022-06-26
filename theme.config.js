/* eslint-disable import/no-anonymous-default-export */

export default {
  projectLink: "https://github.com/fnapi/fnapi", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/fnapi/docs", // base URL for the docs repository
  titleSuffix: " – FnApi",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © kdy1.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img
        src="/logo.svg"
        width="20"
        alt="FnApi"
        style={{ marginRight: "10px" }}
      />
      <span>A function is enough</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="FnApi: the backend framework from future"
      />
      <meta name="og:title" content="FnApi: A function is enough" />
    </>
  ),
};
