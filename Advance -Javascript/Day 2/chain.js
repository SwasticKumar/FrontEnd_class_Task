function asyncTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Task1 Completed");
      reject("Task 1 Error");
    }, 1000);
  });
}
function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task2 Completed");
    }, 3000);
  });
}
function asyncTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task3 Completed");
      //   reject("task 3 ERROR");
    }, 2000);
  });
}
asyncTask1()
  .then((val) => {
    console.log(val);
    return asyncTask2();
  })
  .then((val) => {
    console.log(val);
    return asyncTask3();
  })
  .then((val) => {
    console.log(val);
    console.log("All task completed!!");
  })
  .catch((err) => {
    console.log("Error", err);
  });
