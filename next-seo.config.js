/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "YehezGun",
  titleTemplate: "%s | YehezGun",
  defaultTitle: "YehezGun",
  description: "Yehezkiel Gunawan's portfolio site.",
  canonical: "https://yehezgun.com",
  openGraph: {
    url: "https://yehezgun.com",
    title: "yehezgun",
    description: "Yehezkiel Gunawan's portfolio site",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=An%20online%20portfolio%20and%20article%20site%20by%20Yehezkiel%20Gunawan.%20Showcase%20about%20my%20projects%20and%20some%20thoughts%20about%20my%20experience%20in%20web%20development.&siteName=yehezgun.com&templateTitle=Yehezkiel%20Gunawan&theme=dark",
        alt: "yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehezgun",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/peep.png",
    },
  ],
};

export default defaultSEOConfig;
