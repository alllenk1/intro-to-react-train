import React from 'react';
import type { FC } from 'react';

import { cnTask } from './Task.classname';

import './Task.css';

type TaskProps = {
  title: string;
  description: string;
}

const Task: FC<TaskProps> = ({ title, description }) => {
  return (
    <div className={cnTask()}>
      <h2 className={cnTask('title')}>
        {title}
      </h2>
      <p className={cnTask('description')}>
        {description}
      </p>
    </div>
  );
}

export { Task };