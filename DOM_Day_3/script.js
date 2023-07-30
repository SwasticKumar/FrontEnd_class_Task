let calc_function = (condition) => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result;
  switch (condition) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    default:
      result = "Please enter proper value";
  }
  // alert(result);
  document.getElementById("resultValue").textContent = result;
};
// calc_function("add");
