import { client } from '../../libs/client';
import Header from 'components/ui-projects/header';
import Footer from 'components/ui-projects/footer'
import { Main } from 'components/ui-projects/main';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Seo from 'components/foundation/seo';
import { CardList } from 'components/ui-projects/card-list';
import { TagList } from 'components/ui-projects/tag-list';
import { motion } from 'framer-motion'

export default function TagId({ blogs, tag, id }) {

  const target = tag.find(elm => elm.id === id);

  return (
    <>
      <Seo
        title={`${target.name} の記事一覧`}
        description={`${target.name} の記事一覧ページです。`}
      />

      <Header />
      <Main>
        <LayoutInner size='full'>
          <LayoutStack>
            <h1>ぐいっとBLOG</h1>
            <h2>{target.name}の記事一覧</h2>

            <motion.div
              initial={{ opacity: 0, y: "10%" }} // 初期状態
              animate={{ opacity: 1, y: "0%" }} // マウント時
              exit={{ opacity: 0, y: "10%" }}    // アンマウント時            
            >
              {blogs.length === 0 ? (
                <p>コンテンツがありません</p>
              ) : (
                <CardList contents={blogs} />
              )}
            </motion.div>

            <TagList contents={tag} />

          </LayoutStack>
        </LayoutInner>
      </Main>
      <Footer />

    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'tags' });

  const paths = data.contents.map((content) => `/tag/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: 'blog',
    queries: { filters: `tag[contains]${id}` },
  });
  const tagData = await client.get({ endpoint: 'tags' });

  return {
    props: {
      blogs: data.contents,
      tag: tagData.contents,
      id: id,
    },
  };
};
