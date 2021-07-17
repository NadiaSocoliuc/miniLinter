let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

// 1. split the string 'let story' into individual words and save them in a new array called storyWords.
let storyWords = story.split(' ');

console.log(storyWords.length); // Output 188

//2. Created a variable 'let betterWords' and set it equal to a new string that doesn't include the unnecessaryWords.
// to eliminate the unnecessaryWords, I iterate over storyWords using 'Array.prototype.filter()' and 'Array.prototype.includes()'
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

console.log(betterWords.length); // Output 182

// 3. Checked how many times the overusedWords were used. Created 3 variables for each word. 
//I iterate over the betterWords array three separate times using the 'Array.prototype.forEach()'
// Used the if-else statement and added 1 (++) to the variable every time the current word is the same as that word.
let overusedWords0 = 0;
let overusedWords1 = 0;
let overusedWords2 = 0;

/*  caciulita 1 pe lung - betterWords.forEach(function (word) {
    caciulita 2 pe scurt -  betterWords.forEach(word => {
    if (word === 'really') {
        r++;
    } else if (word === 'very') {
        v++;
    } else if (word === 'basically') {
        b++;
    }
});*/

betterWords.forEach(word => {
    if (word === overusedWords[0]) {
        overusedWords0++;
    } else if (word === overusedWords[1]) {
        overusedWords1++;
    } else if (word === overusedWords[2]) {
        overusedWords2++;
    }
});

//console.log(overusedWords0, overusedWords1, overusedWords2);
console.log(overusedWords0); // Output 5
console.log(overusedWords1); // Output 2
console.log(overusedWords2); // Output 1
//console.log(overusedWords0 + overusedWords1 + overusedWords2); Output 8


////4. Counted how many sentences are in the paragraph.
let sentences = 0;

storyWords.forEach(word => {
    if (word.includes('.')) {
        sentences++;
    } else if (word.includes('!')) {
        sentences++;
    }
});

console.log(sentences); // Output 12

console.log(`The initial length of story contains ${storyWords.length} words. The length of the story without unnecessaryWords
contains ${betterWords.length} words. The story contains 8 overusedWords - ${overusedWords0} of really, 
 ${overusedWords1} of very and ${overusedWords2} of basically. There are ${sentences} sentences in the story.`)

console.log(betterWords.join(' '));