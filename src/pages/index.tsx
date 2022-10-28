import React, { Component } from 'react';
import Link from 'next/link';
import { client } from 'libs/client';
import Grid from 'components/foundation/grid';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Category from 'components/ui-projects/category';
import Seo from 'components/foundation/seo';

export default function Home({ blog, category }) {
  return (
    <>
      <Seo title='Blog Top' />

      <LayoutInner size='full'>
        <LayoutStack>
          <h1>ぐいっとBLOG</h1>
          <Category category={category} />
          <Grid type='col4'>
            {blog.map((blog) => (
              <div key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </div>
            ))}
          </Grid>
        </LayoutStack>
      </LayoutInner>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};
