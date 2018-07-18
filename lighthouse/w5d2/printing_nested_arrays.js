function printItems(array) {
  array.forEach((item) =>{
    if(Array.isArray(item)){
      printItems(item);
    } else{
      console.log(item);
    }
  });
  // for (item of array) {
  //   console.log(item);
  // }
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);
