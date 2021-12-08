import cn from 'classnames';
import { useMemo, useState } from 'react';
import { IProject } from '../../interfaces';
import { PortfolioCategories } from '../../interfaces/enums';
import styles from './Portfolio.module.scss';
import { categories } from '../../data/categories';

import Projects from '../Projects/Projects';

type PropsType = {
  projects: Array<IProject>;
};

const Portfolio: React.FC<PropsType> = ({ projects = [] }) => {
  const [currentCategory, setCurrentCategory] = useState<PortfolioCategories>(
    PortfolioCategories.All
  );

  const filteredProjects = useMemo(() => {
    if (currentCategory === PortfolioCategories.All) {
      return projects;
    }

    return projects.filter((project) => {
      return project.types.some((type) => type === currentCategory);
    });
  }, [currentCategory, projects]);

  const handleSetCategory = (category: PortfolioCategories) => () => {
    setCurrentCategory(category);
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.heading}>
        <h3>My works</h3>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div
              key={category.type}
              className={cn(styles.category, {
                [styles.category_active]: category.type === currentCategory,
              })}
              onClick={handleSetCategory(category.type)}
            >
              {category.title}
            </div>
          ))}
        </div>
      </div>

      <Projects projects={filteredProjects} category={currentCategory} />
    </div>
  );
};

export default Portfolio;
