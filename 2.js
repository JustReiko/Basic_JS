"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author); // Выводим автора поста
console.log(post.comments[0].rating.dislikes); // Выводим количество дизлайков для первого комментария
console.log(post.comments[1].userId); // Выводим идентификатор пользователя второго комментария
console.log(post.comments[1].text); // Выводим текст второго комментария
