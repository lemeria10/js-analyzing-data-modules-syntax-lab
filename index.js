require('datejs');


function combineUsers(...args) {
  let combinedObject = {
    users: []
  };

  for (let i = 0; i < args.length; i++) {
    combinedObject.users.push(...args[i]);
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

console.log(
  combineUsers(['nick'], ['john'], ['mary'])
);




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};