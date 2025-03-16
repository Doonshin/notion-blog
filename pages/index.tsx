import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { siteConfig } from "../site.config";
import { fetchPages } from "../utils/notion";
import { sampleCards } from "../utils/sample";
import { IndexProps } from "@/types/types";
import AuthorIntro from "../components/AuthorIntro";
import { getMultiSelect } from "@/utils/property";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ pages = [] }) => {
  console.log("Pages:", pages);

  // pages が `undefined` の場合のエラーハンドリング
  if (!Array.isArray(pages)) {
    console.error("Error: pages is not an array", pages);
    return <p>Error loading posts.</p>;
  }

  // すべてのタグを取得（重複を削除）
  const allTags = Array.from(
    new Set(
      pages.flatMap((page) =>
        getMultiSelect(page.properties.tags?.multi_select || [])
      )
    )
  );

  return (
    <Layout>
      <AuthorIntro />

      <div className="pt-12">
        <h1 className="text-5xl mb-8">All Posts</h1>

        {/* タグの一覧 */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {allTags.map((tag, index) => (
              <Link
                key={index}
                href={`/tags/${tag}`}
                className="text-gray-700 bg-gray-200 px-2 py-1 rounded-md text-sm no-underline cursor-pointer hover:scale-105 transition-transform duration-200"
                
              >
                {`#${tag}`}
              </Link>
            ))}
          </div>
        )}

        <hr className="border-black-300 my-4" />

        {/* 記事一覧 */}
        <div className="grid md:gap-4 mt-10 md:grid-cols-3 w-full my-12 ">
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
