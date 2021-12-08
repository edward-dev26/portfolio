import { ComponentType, CSSProperties } from 'react';
import { IProject } from '../../interfaces';
import styles from './Projects.module.scss';
import { PortfolioCategories } from '../../interfaces/enums';

import Image from 'next/image';
import Link from 'next/link';
import { Masonry, RenderComponentProps } from 'masonic';

const Project: ComponentType<RenderComponentProps<IProject>> = ({
  data: project,
  index,
}) => {
  const renderTechnologies = (technologies: Array<string>) => {
    return technologies.slice(0, 2).join(' / ');
  };

  const getPreviewStyles = (index: number): CSSProperties => {
    const iteration = Math.floor(index / 7);
    const availableHeight = [490, 326, 396, 396, 396, 303, 256];

    return {
      height: availableHeight[index - iteration * 7],
    };
  };

  return (
    <Link href={`/projects/${project.id}`} passHref>
      <div className={styles.project}>
        <div
          className={styles.project__preview}
          style={getPreviewStyles(index)}
        >
          <Image
            src={project.image}
            alt="preview"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
        <div className={styles.project__info}>
          <h5>{project.title}</h5>
          <div className={styles.project__animation}>
            <p>{renderTechnologies(project.technologies)}</p>
            <button className={styles.project__more}>View project</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

type PropsType = {
  projects: Array<IProject>;
  category: PortfolioCategories;
};

const Projects: React.FC<PropsType> = ({ projects, category }) => {
  return (
    <Masonry
      key={category}
      items={projects}
      columnWidth={340}
      columnGutter={60}
      rowGutter={40}
      overscanBy={6}
      render={Project}
      itemKey={(data) => data?.id}
    />
  );
};

export default Projects;
