import Prismic from 'prismic-javascript';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import Layout from '../components/layout';
import Link from 'next/link';
import { Client } from '../prismic-configuration';


export default function Home({ articles, trending }) {
  return (
    <main>
      <Layout>
          <h1 className='text-4xl uppercase font-bold ml-24'>Page Title</h1>

          <div className='flex'>
            <div className='flex flex-col w-2/3 ml-24 mr-20'>
                {
                    articles.results.map( (article, index) => {
                      console.log(article)
                      return(                      
                        <div key={article.uid}>
                          <Link href={`article/${article.uid}`}>
                            {RichText.render(article?.data?.title)} 
                          </Link>

                          <img className='w-2/3' src={article?.data?.featuredimage?.url} alt='img'/>

                          <div className=''>
                            {RichText.render(article?.data['description'])} 
                          </div>
                        </div>
                      )
                    })
                }
            </div>
            <div className='flex flex-col w-1/3'>
                <h1 className='text-4xl uppercase font-bold ml-24'>Trending Articles</h1>

                {trending.results.map((article, index) => (
                  <div key={article.uid}>
                    <Link href={`trending/${article.uid}`}>
                      
                        {RichText.render(article.data.title)}                     
                    </Link>

                    <hr className="mt-5" />
                  </div>
                ))}
            </div>
          </div>
      </Layout>
    </main>
  )
}


// this is called everytime a reuest/refresh is made

export async function getServerSideProps () {
  const articles = await Client().query(
    Prismic.Predicates.at("document.type", "article")
  );

  const trending = await Client().query(
    Prismic.Predicates.at("document.type", "trending")
  );
  
  console.log(articles);

  return{
    props: {
      articles: articles,
      trending: trending,
    }
  }
}