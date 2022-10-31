import React, { Component } from 'react';
import { client } from 'libs/client';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import CategoryList from 'components/ui-projects/category-list';
import Seo from 'components/foundation/seo';
import { CardList } from 'components/ui-projects/card-list';
import { TagList } from 'components/ui-projects/tag-list';

export default function Home({ blogs, category, tag }) {
  return (
    <>
      <Seo title='Blog Top' />

      <LayoutInner size='full'>
        <LayoutStack>
          <h1>ぐいっとBLOG</h1>
          <CategoryList categories={category} />
          <CardList contents={blogs} />
          <TagList contents={tag} />
        </LayoutStack>
      </LayoutInner>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const categoryData = await client.get({ endpoint: 'categories' });
  const tagData = await client.get({ endpoint: 'tags' });

  return {
    props: {
      blogs: data.contents,
      category: categoryData.contents,
      tag: tagData.contents,
    },
  };
};
