import React, { Component } from 'react'
import Link from "next/link";
import { client } from "libs/client";
import LayoutGrid from 'components/layout/layoutGrid';
import Inner from 'components/layout/inner';
import Category from 'components/category/category';
import Head from 'next/head';

export default function Home({ blog, category }) {
  return (
    <>
      <Head>
        <title>BLOG | Guitto Inc.</title>
        <meta name="description" content="ぐいっとは、東京の神保町で企画・デザインを中心に制作事業を行っているクリエイティブ企業です。各種WEB制作・グラフィック制作等、ご相談ください。" />
        <meta property="og:title" content="BLOG | Guitto Inc." />
        <meta property="og:description" content="ぐいっとは、東京の神保町で企画・デザインを中心に制作事業を行っているクリエイティブ企業です。各種WEB制作・グラフィック制作等、ご相談ください。" />
      </Head>

      <Inner>
        <h1>ぐいっとBLOG</h1>
        <Category category={category} />
        <LayoutGrid grid="col4">
          <ul>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </LayoutGrid>
      </Inner>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};