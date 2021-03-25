// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair="*") {
  return function (msg="special") {
    return `You are ${flair}${msg}${flair}!`;
  }
};

var Calculator = {
  add : function(x, y) {
    return x + y;
  },
  subtract : function(x, y) {
    return x - y;
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide : function(x, y) {
    return x / y;
  }
};

function actionApplyer(startInt, array) {
  if (array.length) === 0 {
    return startInt;
  } else {
    return "HEY";
  }
};
