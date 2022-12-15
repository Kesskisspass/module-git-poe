function isString(str) {
    return typeof str === "string";
  }
  
  function isEmail(text = "") {
    return text.includes("@");
  }
console.log(isString(45));