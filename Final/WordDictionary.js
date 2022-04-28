// Words taken from https://www.thefreedictionary.com/5-letter-words.htm
// Disctionary to keep words
let words = ["adult","break","beach","birth","china","event","drink","judge","nurse","sheet", "actor","adopt","anger","agree","award","child","chart","dream","dance","forum",
"floor","flash","funny","heavy","hotel","legal","laser","light","ocean","panel",
"novel","noise","party","prize","queen","quite","prime","peace","ratio","proof",
"sense","shape","royal","rapid","solve","speak","space","youth","vital","virus"];

// Hints taken from https://www.the-crossword-solver.com
// Dictionary to keep hints associated with words
let hintTexts =
["Voter by law","Short Holiday","Sandy shore","Annually celebrated event","Great Wall Locale","Big ocassion","Swallow liquid","Court official","Health worker","Bed cover",
"One with a part","Bring into the family","Strong displeasure","Be in accord","Oscar for one","Young human","Visual display","Sleeping experience","Move to music","Internet message board","Storey in a building","Bit of Lightning","Like a good comedian","Of great weight","Trump International","Corporate department","High-intensity beam","Source of illumination","Vast sea","Interviewing group","Type of book","Unwanted sound","Celebration","Winners award","Powerful board member","Silence","Best quality","State of calm","Math comparison","Evidence","Be of the opinion","External form","Pertaining to a sovereign","Very fast","Find answer to","Express aloud","Empty area","Early part of life","All-important","Infective particle"]

// Class to generate word and hint from above dictionary
class WordDictionary{
  generateWord(){
    index = floor(random(0,50));
    return words[index];
  }
  generateHint(){
    return hintTexts[index];
  }
}