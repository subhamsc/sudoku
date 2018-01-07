const getLevel = function(level){
  let modes = {
    beginner:10,
    easy:20,
    medium:40,
    hard:60,
    expert:80
  };
  return modes[level];
};
// exports.getLevel = getLevel;