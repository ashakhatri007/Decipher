let words = ["Adult","Break","Beach","Birth","China","Event","Drink","Judge","Nurse","Sheet"];
class WordDictionary{
  generateWord(){
    let index = floor(random(0,10));
    console.log("Class index is"+index);
    return words[index];
  }
}