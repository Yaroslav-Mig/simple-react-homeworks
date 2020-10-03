import React from 'react';
import style from './Message.module.css';

type PropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export function Message(props: PropsType) {
  return (
    <article className={style.container}>
      <div className={style.box_img}>
        <img
          className={style.avatar}
          src={require(`${props.avatar}`)}
          alt='avatar'
          title={props.name}
        />
      </div>
      <div className={style.box_message}>
        <h4 className={style.name}>{props.name}</h4>
        <p className={style.text}>
          {props.message}
          <time className={style.time} dateTime='20:00'>
            {props.time}
          </time>
        </p>
      </div>
    </article>
  );
}

export default Message;
