import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

function HomePageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title="Welcome"
      description="学习｜记录｜分享"
    >
      <HomePageHeader />
      <div className={styles.content}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/getting-started"
        >
          笔记
        </Link>
        &emsp;
        <Link
          className="button button--secondary button--lg"
          to="/projects/spout"
        >
          项目
        </Link>
        &emsp;
        <Link
          className="button button--secondary button--lg"
          to="/blog/hello-world"
        >
          博客
        </Link>
      </div>
    </Layout>
  );
}
