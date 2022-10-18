import React, { Component } from 'react'
import { client } from "libs/client";
import styles from './blog.module.scss';
import Inner from 'components/layout/inner';
import Head from 'next/head';

export default function BlogId({ blog }) {
  return (
    <>
      <Head>
        <title>{blog.title} | Guitto Inc.</title>
        <meta name="description" content={`${blog.title}のページ`} />
        <meta property="og:title" content={`${blog.title} | Guitto Inc.`} />
        <meta property="og:description" content={`${blog.title}のページ`} />
      </Head>

      <main className={styles.main}>
        <Inner>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
          <p className="category">{blog.category && `${blog.category.name}`}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
            className={styles.post}
          />
        </Inner>
      </main>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};