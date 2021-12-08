import { NextSeo } from "next-seo";

import { yehezOgImage } from "functions/helpers/yehezOgImage";

type AppHeaderProps = {
  pageTitle: string;
  pageDesc: string;
  route?: string;
};

const MetaHead = ({ pageTitle, pageDesc, route }: AppHeaderProps) => {
  return (
    <NextSeo
      title={`${pageTitle}`}
      description={pageDesc}
      canonical={`https://yehezgun.com/${route ? route : ""}`}
      openGraph={{
        url: `https://yehezgun.com/${route ? route : ""}`,
        title: `${pageTitle} | YehezGun`,
        description: `${pageDesc}`,
        type: `website`,
        images: [
          {
            url: `${yehezOgImage(pageTitle)}`,
            alt: `${pageTitle} | YehezGun`,
            width: 800,
            height: 600,
          },
        ],
        site_name: "yehezgun",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/assets/yehez-avatar.png",
        },
      ]}
    />
  );
};

export default MetaHead;
