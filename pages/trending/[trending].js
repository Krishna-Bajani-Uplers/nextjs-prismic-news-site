import { RichText } from "prismic-reactjs";
import { Client } from "../../prismic-configuration";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Article({ article }) {
  return (
    <Layout>
      <div className="w-2/3 mx-auto">
        <div className="text-3xl uppercase font-bold my-10">
          {RichText.render(article.data.title)}
        </div>

        <div className=''>
            {RichText.render(article?.data['description'])} 
        </div>
        
        <Link href="/">
          <button className="bg-black text-white py-3 px-10 my-4 text-lg uppercase">
            {" "}
            Back to home &nbsp; 👈
          </button>
        </Link>
      </div>
    </Layout>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("trending", context.query.trending);

  return {
    props: {
      article: article,
    },
  };
}
