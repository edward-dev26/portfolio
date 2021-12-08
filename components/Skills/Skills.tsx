import React, { useEffect, useRef } from 'react';
import { ISkill } from '../../interfaces';
import styles from './Skills.module.scss';

type PropsType = {
  skills: Array<ISkill>;
};

const Skill: React.FC<ISkill> = ({ progress, title }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const getPercentage = (progress: number) => `${progress}%`;

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = getPercentage(progress);
    }
  }, [progress]);

  return (
    <div className={styles.skill}>
      <div className={styles.title}>{title}</div>
      <div className={styles.progress}>
        <div className={styles.progressBar} ref={progressBarRef}>
          <span
            className={styles.percentage}
            style={{ left: getPercentage(progress) }}
          >
            {getPercentage(progress)}
          </span>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC<PropsType> = ({ skills }) => {
  return (
    <div className={styles.skills}>
      {skills.map((skill) => (
        <Skill key={skill.title} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
