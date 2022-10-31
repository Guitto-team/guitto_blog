import { client } from '../../libs/client';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import CategoryList from 'components/ui-projects/category-list';
import Seo from 'components/foundation/seo';
import { CardList } from 'components/ui-projects/card-list';
import { TagList } from 'components/ui-projects/tag-list';

export default function CategoryId({ blogs, category, tag, id }) {
  const target = category.find((elm) => elm.id === id);

  return (
    <>
      <Seo
        title={`${target.name} の記事一覧`}
        description={`${target.name} の記事一覧ページです。`}
      />

      <LayoutInner size='full'>
        <LayoutStack>
          <h1>ぐいっとBLOG</h1>
          <CategoryList categories={category} active={id} />

          {blogs.length === 0 ? <p>コンテンツがありません</p> : <CardList contents={blogs} />}

          <TagList contents={tag} />
        </LayoutStack>
      </LayoutInner>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'categories' });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[equals]${id}` },
  });
  const categoryData = await client.get({ endpoint: 'categories' });
  const tagData = await client.get({ endpoint: 'tags' });

  return {
    props: {
      blogs: data.contents,
      category: categoryData.contents,
      tag: tagData.contents,
      id: id,
    },
  };
};
