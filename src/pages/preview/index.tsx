import React, { Component } from 'react';
import { client } from 'libs/client';
import styles from '../blog/index.module.scss';
import Header from 'components/ui-projects/header';
import Footer from 'components/ui-projects/footer';
import Sidebar from 'components/ui-projects/sidebar';
import { Main } from 'components/ui-projects/main';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Seo from 'components/foundation/seo';
// import { CardList } from 'components/ui-projects/card-list';
import { TagList } from 'components/ui-projects/tag-list';
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
      <Sidebar />

      <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
      <Main>
        <LayoutInner>
          <LayoutStack>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} // 初期状態
              animate={{ opacity: 1, scale: 1 }} // マウント時
              exit={{ opacity: 0, scale: 0.9 }}    // アンマウント時            
            >
              <Typography html='h1'>{blog.title}</Typography>
              <p className={styles.publishedAt}>{blog.publishedAt}</p>
              <span className={styles.category}>{blog.category && `${blog.category.name}`}</span>
              {blog.recommend && (<span className={styles.recommend}>おすすめ</span>)}
              <div
                dangerouslySetInnerHTML={{
                  __html: `${blog.content}`,
                }}
                className={styles.post}
              />
              {blog.tag && (
                <TagList contents={blog.tag} />
              )}

            </motion.div>
          </LayoutStack>
        </LayoutInner>
      </Main>
      <Footer />

    </>
  );
}

export const getServerSideProps = async (context) => {
  const data = await client.get({
    endpoint: "blog",
    contentId: context.query.slug,
    queries: { draftKey: context.query.draftKey },
  });

  return {
    props: { blog: data },
  };
};