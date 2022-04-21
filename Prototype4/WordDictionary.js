// Words taken from https://www.thefreedictionary.com/5-letter-words.htm
let words = ["Adult","Break","Beach","Birth","China","Event","Drink","Judge","Nurse","Sheet", "Actor","Adopt","Anger","Agree","Award","Child","Chart","Dream","Dance","Forum",
"Floor","Flash","Funny","Heavy","Hotel","Legal","Laser","Light","Ocean","Panel",
"Novel","Noise","Party","Prize","Queen","Quite","Prime","Peace","Ratio","Proof",
"Sense","Shape","Royal","Rapid","Solve","Speak","Space","Youth","Vital","Virus"];
// Hints taken from https://www.the-crossword-solver.com/word
let hintTexts =
["Voter by law","Short Holiday","Sandy shore","Annually celebrated event","Great Wall Locale","Big ocassion","Swallow liquid","Court official","Health worker","Bed cover",
"One with a part","Bring into the family","Strong displeasure","Be in accord","Oscar for one","Young human","Visual display","Sleeping experience","Move to music","Internet message board","Storey in a building","Bit of Lightning","Like a good comedian","Of great weight","Trump International","Corporate department","High-intensity beam","Source of illumination","Vast sea","Interviewing group","Type of book"]
class WordDictionary{
  generateWord(){
    let index = floor(random(0,50));
    console.log("Class index is"+index);
    return words[index];
  }
}