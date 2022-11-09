import React from 'react'
import Head from 'next/head';

export interface SeoProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const Seo: React.FC<SeoProps> = ({
    title = 'BLOG',
    description = 'ぐいっとは、東京の神保町で企画・デザインを中心に制作事業を行っているクリエイティブ企業です。各種WEB制作・グラフィック制作等、ご相談ください。',
    imageUrl = ''
  }) => {
  return (
    <Head>
      <title key="title">{`${title} | Guitto Inc.`}</title>
      <meta
        name='description'
        content={description}
      />
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={description}
      />
      <meta property="og:image" content={`${process.env.SITE_URL}/ogp.png`} />
      <meta property="og:site_name" content="BLOG ｜ Guitto Inc."></meta>
    </Head>
  );
}

export default React.memo(Seo);