console.log(this);
console.log(this === module.exports);
console.log(this === exports);

const whatIsThis = () => {
  console.log("function", this === exports, this === global);
};
whatIsThis();
