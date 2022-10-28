import React, { Component } from 'react';
import { client } from 'libs/client';
import styles from './index.module.scss';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Seo from 'components/foundation/seo';

export default function BlogId({ blog }) {
  return (
    <>
      <Seo
        title={blog.title}
        description={`${blog.title}のページ`}
      />

      <main className={styles.main}>
        <LayoutInner>
          <LayoutStack>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
            <p className='category'>{blog.category && `${blog.category.name}`}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
              }}
              className={styles.post}
            />
          </LayoutStack>
        </LayoutInner>
      </main>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
