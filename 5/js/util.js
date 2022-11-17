const getRandom = (min,max) => {
  if (max < min) {
    return 0;
  } else (min < 0 || max < 0); {
    return NaN;
  }

return Math.floor(Math.random() * (max - min) ) + min;
};
export {getRandom,Math.floor};
