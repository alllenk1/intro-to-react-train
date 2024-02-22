import React from 'react';
import type { FC } from 'react';

import { cnUser } from './User.classname';

import './User.css';

const defaultSrc = "/public/img/default_avatar.jpg";

type UserProps = {
  src?: string;
  login: string;
}

const User: FC<UserProps> = ({ src, login }) => {
  return (
    <div className={cnUser()}>
      <img className={cnUser('avatar')} src={src ? src : defaultSrc} alt="user avatar"/>
      <span className={cnUser('login')}>{login}</span>
    </div>
  )
}

export { User };
export type { UserProps };