const { name } = require("browser-sync");

const PHOTO_COUNT = 25;

let imageId = 1;

let commentId = 1;

const massages = [
 'Всё отлично!',
 'В целом всё неплохо. Но не всё.',
 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
'Ария',
'Георг',
'Маша',
'Сеня',
'ДжиДжи',
'Серго',
];

const getRandom = (min,max) => {
  if (max < min) {
    return 0;
  } else (min < 0 || max < 0); {
    return NaN;
  }

return Math.floor(Math.random() * (max - min) ) + min;
};

const createComment = () => {
  return {
    id:commentId++,
    avatar: /img/${getRandom(1, 6)}.jpg,
    message: messages[getRandom(0, 5)],
    name: names[getRandom(0, 9)]
  };
};

const addPhoto = (index) => ({
  id: imageId++,
  url: `/photos/${index}.jpg`,
  description: `фото №${imageId}`,
  likes: getRandom(15, 200),
  comments: Array.from({length: getRandom(0, 5)}, addComment)
});

const photos = Array.from({length: PHOTO_COUNT}, (_, index) => addPhoto(++index));

