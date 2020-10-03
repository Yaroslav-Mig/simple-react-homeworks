import React from 'react';
import Message from './Message';
// import img from './img/avatar.jpg';

const messageData = {
  avatarImg: './img/avatar.jpg',
  name: 'Yaroslav MIg',
  message: 'React разработан вокруг концепции многоразовых компонентов. Вы определяете небольшие компоненты, и объединяете их, чтобы сформировать более крупные компоненты.',
  time: '21:00',
};

function HW1() {
  return (
    <>
      <Message
        avatar={messageData.avatarImg}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
    </>
  );
}

export default HW1;
