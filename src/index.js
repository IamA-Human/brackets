module.exports = function check(str, bracketsConfig) {
  const opens = bracketsConfig.map((a) => a[0]);
  const closes = bracketsConfig.map((a) => a[1]);
  const res = [];

  for (let s of str) {
    if (opens.includes(s) && !closes.includes(s)) {
      res.push(s);
    } else if (closes.includes(s) && !opens.includes(s)) {
      const index = closes.indexOf(s);
      if (res.length > 0 && res[res.length - 1] === opens[index]) {
        res.pop();
      } else {
        return false;
      }
    } else if (opens.includes(s) && closes.includes(s)) {
      if (res.length > 0 && res[res.length - 1] === s) {
        res.pop();
      } else {
        res.push(s);
      }
    }
  }
  return res.length === 0;
};
