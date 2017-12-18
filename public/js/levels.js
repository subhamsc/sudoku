const setLevel = function(level){
  let modes = {
    beginner:50,
    easy:60,
    medium:80,
    hard:100,
    expert:120
  };
  return modes[level];
};
