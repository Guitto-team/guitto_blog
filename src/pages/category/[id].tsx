import Link from "next/link";
import { client } from "../../libs/client";
import LayoutStack from 'components/layout/layoutStack';
import Inner from 'components/layout/inner';
import Category from 'components/category/category';
import Head from 'next/head';

export default function CategoryId({ blog, category }) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return (
      <>
        <Head>
          <title>NoContent | Guitto Inc.</title>
          <meta name="description" content="に該当する記事は現在公開されていません。" />
          <meta property="og:title" content={`NoContent | Guitto Inc.`} />
          <meta property="og:description" content="に該当する記事は現在公開されていません。" />
        </Head>

        <Inner>
          <div>ブログコンテンツがありません</div>
        </Inner>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{category.name}一覧 | Guitto Inc.</title>
        <meta name="description" content={`${category.name}一覧のページ`} />
        <meta property="og:title" content={`${blog.name}一覧 | Guitto Inc.`} />
        <meta property="og:description" content={`${category.name}一覧のページ`} />
      </Head>

      <Inner>
        <h1>ぐいっとBLOG</h1>
        <Category category={category} />
        <LayoutStack>
          <ul>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </LayoutStack>
      </Inner>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}` } });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};