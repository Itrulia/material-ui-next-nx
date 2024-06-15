import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';
import {
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from 'next/document';
import { Head } from 'next/document';

export default function MyDocument(
  props: DocumentProps & DocumentHeadTagsProps
) {
  return (
    <Html lang={props.locale}>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
