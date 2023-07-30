let readBook = (callback) => {
  console.log("Lets start reading the book..");
  setTimeout(() => {
    console.log("Finshed reading the book!!");
    callback();
  }, 5000);
};

let afterReading = () => {
  console.log("Great Job! time to play game now!");
};
readBook(afterReading);
