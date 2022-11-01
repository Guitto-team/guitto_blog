import React, { Component } from 'react';
import { client } from 'libs/client';
import styles from './index.module.scss';
import Header from 'components/ui-projects/header';
import Footer from 'components/ui-projects/footer'
import { Main } from 'components/ui-projects/main';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Seo from 'components/foundation/seo';
import TagList from 'components/ui-projects/tag-list';
import { motion, useScroll } from 'framer-motion'
import { Typography } from 'components/ui-parts/typography';

export default function BlogId({ blog }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Seo
        title={blog.title}
        description={`${blog.title}のページ`}
      />

      <Header />
      <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
      <Main>
        <LayoutInner>
          <LayoutStack>
            <motion.div
              initial={{ opacity: 0 }} // 初期状態
              animate={{ opacity: 1 }} // マウント時
              exit={{ opacity: 0 }}    // アンマウント時            
            >
              <Typography html='h1'>{blog.title}</Typography>
              <p className={styles.publishedAt}>{blog.publishedAt}</p>
              <p className='category'>{blog.category && `${blog.category.name}`}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${blog.content}`,
                }}
                className={styles.post}
              />
              <TagList contents={blog.tag} />
            </motion.div>
          </LayoutStack>
        </LayoutInner>
      </Main>
      <Footer />

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
