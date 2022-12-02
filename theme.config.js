// eslint-disable-next-line import/no-anonymous-default-export
export default {
  project: { link: "https://github.com/splashsaver/docs" }, // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/splashsaver/docs/blob/master", // base URL for the docs repository
  titleSuffix: " – Splashsaver",
  nextLinks: true,
  prevLinks: true,
  search: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footer: { text: `MIT ${new Date().getFullYear()} © Splashsaver` },
  editLink: { text: "Edit this page on GitHub" },
  logo: (
    <>
      <span style={{ fontWeight: 700, fontSize: "19px" }}>
        splashsaver.com docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Our official developers documentation"
      />
      <meta name="og:title" content="Splashsaver Docs" />
    </>
  ),
};
