import { ColorModeScript } from "@chakra-ui/react";
// eslint-disable-next-line import/order
import createEmotionServer from "@emotion/server/create-instance";

// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import React from "react";

import { WEBSITE_ID, WEBSITE_SRC } from "constants/baseConfig";
import emotionCache from "functions/services/emotion-cache";
import theme from "theme";

const { extractCritical } = createEmotionServer(emotionCache);

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-website-id={WEBSITE_ID}
            src={WEBSITE_SRC}
            data-domains="yehezgun.com"
          ></script>
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
