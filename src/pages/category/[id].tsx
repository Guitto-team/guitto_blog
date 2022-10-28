import Link from 'next/link';
import { client } from '../../libs/client';
import LayoutInner from 'components/foundation/layout-inner';
import LayoutStack from 'components/foundation/layout-stack';
import Grid from 'components/foundation/grid';
import Category from 'components/ui-projects/category';
import Seo from 'components/foundation/seo';

export default function CategoryId({ blog, category, id }) {

  const targetCategory = category.find(elm => elm.id === id);

  return (
    <>
      <Seo
        title={`${targetCategory.name} の記事一覧`}
        description={`${targetCategory.name} の記事一覧ページです。`}
      />

      <LayoutInner>
        <LayoutStack>
          <h1>ぐいっとBLOG</h1>
          <Category category={category} active={id} />

          {blog.length === 0 ? (
            <p>コンテンツがありません</p>
          ) : (
            <Grid type='col4'>
              {blog.map((blog) => (
                <div key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <a>{blog.title}</a>
                  </Link>
                </div>
              ))}
            </Grid>
          )}

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

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
      id: id,
    },
  };
};
