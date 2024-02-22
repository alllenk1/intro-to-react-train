import React from 'react';

import { cnApp } from './App.classname';
import { Button } from './components/Button/Button';
import { Task } from './components/Task/Task';
import { User } from './components/User/User';
import type { UserProps } from './components/User/User';

import './App.css';


const users: UserProps[] = [
  {
    src: '/img/cucumber.jpg',
    login: 'veggy',
  },
  {
    src: '/img/sleepy_cat.jpg',
    login: 'zaika-kot',
  },
  {
    src: '/img/coffee.jpg',
    login: 'someone else',
  },
]

const App = () => {
  return (
    <div className={cnApp()}>
      <h1 className={cnApp('title')}>8.1 Знакомство с&nbsp;React</h1>

      <Task title='Кварк кнопочности' description='Сделайте одну любую кнопку из макета'/>
      <Button text='Hello'/>

      <Task title='Круглый юзерак' description='Сделайте компонент с аватаркой пользователя и его логином (ссылка на аватарку и логин должны передаваться через пропсы). Отобразите компонент в интерфейсе'/>
      <User src='/public/img/allenk.jpg' login='allenk'/>

      <Task title='Дружочки-кружочки' description='Сделайте массив объектов данных пользователей и отобразите на его основе несколько бейджиков пользователей из прошлой задачи'/>
      <div className={cnApp('users')}>
        {users.map((user, index) => <User key={index} {...user}/>)}
      </div>

      <Task title='Башка, дай свгшка' description='Добавьте обработку ситуации, когда у пользователя нет аватарки в данных. Выводите в этом случае какую-то аватарку по умолчанию'/>
      <User login='one more user'/>

      <Task title='Реактрёшка' description='Сделайте на реакте страничку этой домашки. Только текст домашек и заголовки + заголовок всей страницы и эмоджи-иконка'/>
    </div>
  );
}

export default App;
