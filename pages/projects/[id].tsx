import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from '../../styles/Projects.module.scss';
import { IProject } from '../../interfaces';
import React, { useMemo } from 'react';
import { categories } from '../../data/categories';
import { projects } from '../../data/projects';
import { getTitle } from '../../utils/getTitle';

import Head from 'next/head';
import Link from 'next/link';
import Gallery from '../../components/Gallery/Gallery';

type PropsType = {
  project: IProject;
  nextProject: IProject;
};

const Project: NextPage<PropsType> = ({ project, nextProject }) => {
  const renderTechnologies = (technologies: Array<string>) =>
    technologies.join(' / ');

  const displayLink = (title: string, href?: string) =>
    href && (
      <a className={styles.link} href={href} target="_blank" rel="noreferrer">
        {title}
      </a>
    );

  const infoItems = useMemo(() => {
    const links = [
      displayLink('Code', project.links?.repo),
      displayLink('Demo', project.links?.demo),
      displayLink('API', project.links?.api),
    ].map((link, index, arr) =>
      arr[index + 1] ? (
        <React.Fragment key={index}>{link} - </React.Fragment>
      ) : (
        <React.Fragment key={index}>{link}</React.Fragment>
      )
    );

    const category = project.types
      .map(
        (type) => categories.find((category) => category.type === type)?.title
      )
      .filter(Boolean)
      .join(' / ');

    return [
      {
        key: 'Date',
        value: project.date,
      },
      {
        key: 'Category',
        value: category,
      },
      {
        key: 'Links',
        value: links,
      },
    ];
  }, [project]);

  return (
    <div className={styles.project}>
      <Head>
        <title>{getTitle(project.title)}</title>
      </Head>
      <div className={styles.heading}>
        <h2>{project.title}</h2>
        <div className={styles.technologies}>
          {renderTechnologies(project.technologies)}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.gallery}>
          <Gallery images={[project.image, project.image]} />
        </div>
        <div className={styles.description}>
          <div className={styles.overview}>
            <h4>Overview</h4>
            <p>{project.description}</p>
          </div>
          <ul className={styles.info}>
            {infoItems.map(
              (item) =>
                item.value && (
                  <li key={item.key}>
                    <span className={styles.info__key}>{item.key} </span>
                    <span className={styles.info__value}>- {item.value}</span>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      <div className={styles.navigation}>
        <Link href={`/projects/${nextProject.id}`}>
          <div className={styles.navigation__btn}>
            <div className={styles.navigation__next}>NEXT PROJECT</div>
            <div className={styles.navigation__title}>{nextProject.title}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map(({ id }) => ({
    params: {
      id: `${id}`,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectIndex = projects.findIndex(
    (project) => project.id == params?.id
  );

  return {
    props: {
      project: projects[projectIndex] || null,
      nextProject: projects[projectIndex + 1] || projects[0],
    },
  };
};

export default Project;
