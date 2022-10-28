import { client } from '../../libs/client';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Category from 'components/ui-projects/category';
import Seo from 'components/foundation/seo';
import CardList from 'components/ui-projects/card-list';

export default function TagId({ blog, category, tag, id }) {

  const target = tag.find(elm => elm.id === id);

  return (
    <>
      <Seo
        title={`${target.name} の記事一覧`}
        description={`${target.name} の記事一覧ページです。`}
      />

      <LayoutInner size='full'>
        <LayoutStack>
          <h1>ぐいっとBLOG</h1>
          <Category category={category} />

          {blog.length === 0 ? (
            <p>コンテンツがありません</p>
          ) : (
            <CardList contents={blog} />
          )}

        </LayoutStack>
      </LayoutInner>
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
  const categoryData = await client.get({ endpoint: 'categories' });
  const tagData = await client.get({ endpoint: 'tags' });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
      tag: tagData.contents,
      id: id,
    },
  };
};
