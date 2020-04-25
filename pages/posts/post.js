import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post(meta = {}) {
  return ({ children }) => {
    return (
      <Layout>
        <Head>
          <title>{meta.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{meta.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={meta.date} />
          </div>
          <div className={utilStyles.darkText}>{children}</div>
        </article>
      </Layout>
    );
  };
}
