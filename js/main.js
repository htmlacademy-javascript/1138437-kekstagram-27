const { name } = require("browser-sync");

const PHOTO_COUNT = 25;

const getRandom = (min,max) => {
  if (max < min) {
    return 0;
  } else (min < 0 || max < 0); {
    return NaN;
  }

return Math.floor(Math.random() * (max - min) ) + min;
};

const getLength (str, length) {
  return (str.length <= length);
};


const ID = [
1,
2,
3,
4,
];

const URL = [
'img/avatar-1.svg',
'img/avatar-2.svg',
'img/avatar-3.svg',
'img/avatar-4.svg',
];
const DESCRIPTION =[

];

const createUser = () => {
  return {
    id: '',
    avatar: '',
    message: '',
    name: ''
  };
};

const addPhoto = (index) => ({
  id: getRandom(1, 1000),
  url: `/photos/${index}.jpg`,
  description: '',
  likes: getRandom(1, 100),
  comments: Array.from({length: getRandom(0, 5)}, addComment)
});

const photos = Array.from({length: PHOTO_COUNT}, (_, index) => addPhoto(++index));

