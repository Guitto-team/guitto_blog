import React, { Component } from 'react';
import { client } from 'libs/client';
import Header from 'components/ui-projects/header';
import Footer from 'components/ui-projects/footer'
import { Main } from 'components/ui-projects/main';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import CategoryList from 'components/ui-projects/category-list';
import Seo from 'components/foundation/seo';
import { CardList } from 'components/ui-projects/card-list';
import { TagList } from 'components/ui-projects/tag-list';
import { motion } from 'framer-motion'
import { Typography } from 'components/ui-parts/typography';
import { Pagination } from 'components/ui-projects/pagination';

export default function Home({ blogs, recommendBlogs, category, tag }) {
  return (
    <>
      <Seo title='Blog Top' />

      <Header />
      <Main>
        <LayoutInner size='full'>
          <LayoutStack>
            <Typography html='h1' textAlign='center'>ぐいっとBLOG</Typography>
            <CategoryList categories={category} />
            <motion.div
              initial={{ opacity: 0, y: "10%" }} // 初期状態
              whileInView={{ opacity: 1, y: "0%" }} // マウント時
              exit={{ opacity: 0, y: "10%" }}    // アンマウント時
              viewport={{ once: true }}
            >
              <CardList contents={blogs} />
            </motion.div>
            <TagList contents={tag} />
            {recommendBlogs.length > 0 && (
              <>
                <Typography html='h3' textAlign='center'>おすすめ記事</Typography>
                <CardList contents={recommendBlogs} />
              </>
            )}
          </LayoutStack>
        </LayoutInner>
      </Main>
      <Footer />

    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const recommend = await client.get({
    endpoint: 'blog',
    queries: { filters: `recommend[equals]true` },
  });
  const categoryData = await client.get({ endpoint: 'categories' });
  const tagData = await client.get({ endpoint: 'tags' });

  return {
    props: {
      blogs: data.contents,
      recommendBlogs: recommend.contents,
      category: categoryData.contents,
      tag: tagData.contents,
    },
  };
};
