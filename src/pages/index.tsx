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

export default function Home({ blogs, category, tag }) {
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
              animate={{ opacity: 1, y: "0%" }} // マウント時
              exit={{ opacity: 0, y: "10%" }}    // アンマウント時            
            >
              <CardList contents={blogs} />
            </motion.div>
            <TagList contents={tag} />
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
