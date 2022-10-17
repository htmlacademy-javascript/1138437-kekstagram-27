
function getRandom (min,max) {
  if (max < min) {
    return 0;
  } else (min < 0 || max < 0); {
    return NaN;
  }

return Math.floor(Math.random() * (max - min) ) + min;

}


function getLength (str,length) {
count = str.length;
if (count <= length) {
  return true;
}
return false;
}

