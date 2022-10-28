import React, { Component } from 'react';
import { client } from 'libs/client';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Category from 'components/ui-projects/category';
import Tag from 'components/ui-parts/tag';
import Seo from 'components/foundation/seo';
import CardList from 'components/ui-projects/card-list';
import Flex from 'components/foundation/flex';

export default function Home({ blog, category, tag }) {
  return (
    <>
      <Seo title='Blog Top' />

      <LayoutInner size='full'>
        <LayoutStack>
          <h1>ぐいっとBLOG</h1>
          <Category category={category} />
          <CardList contents={blog} />
          <Flex>
            {tag.map((tag) => (
              <li key={tag.id}>
                <Tag content={tag} />
              </li>
            ))}
          </Flex>
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
      blog: data.contents,
      category: categoryData.contents,
      tag: tagData.contents,
    },
  };
};
