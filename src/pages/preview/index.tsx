import { client } from "../../libs/client";

export default function BlogId({ data }) {
  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.publishedAt}</p>
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const data = await client.get({
    endpoint: "blog",
    contentId: context.query.id,
    queries: { draftKey: context.query.draftKey },
  });

  return {
    props: { data },
  };
};