/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "YehezGun",
  titleTemplate: "%s | YehezGun",
  defaultTitle: "YehezGun",
  description:
    "Yehezkiel Gunawan's portfolio site.",
  canonical: "https://yehezgun.com",
  openGraph: {
    url: "https://yehezgun.com",
    title: "yehezgun",
    description: "Yehezkiel Gunawan's portfolio site",
    type: "website",
    images: [
      {
        url: "https://yehez-og-image.yehezgun.com/yehezgun.com.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250",
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
