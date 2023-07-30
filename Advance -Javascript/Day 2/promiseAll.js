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
  Promise.all([asyncTask1,asyncTask2,asyncTask3])
  