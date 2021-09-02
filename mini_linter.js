/****************************************************************************************************
*** File Name:      mini_linter.js
*** Description:    JavaScript to iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph  
*** Author:         Trevor Carson
*** Date:           2021-09-02
*****************************************************************************************************/

// String for linter operations
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];                // Variable to hold overused words
let unnecessaryWords = ['extremely', 'literally', 'actually'];      // Variable to hold unnecessary words

const storyWords = story.split(" ");                                // Array to hold every word from story that are seperated by a space

// Function to iterate over the story and remove unnecessary words
let betterWords = storyWords.filter(function (word) {
    return !unnecessaryWords.includes(word)
});

let reallyCount = 0;                                                // Variable to count the number of times "really" appears
let veryCount = 0;                                                  // Variable to count the number of words "very" appears
let basicallyCount = 0;                                             // Variable to count the number of words "basically" appears
let sentencesCount = 0;                                             // Variable to count the number of sentences

// Iterates over the story to count specific words and sentences
for (word of storyWords) {
    if (word === "really") { reallyCount++ }
    if (word === "very") { veryCount++ }
    if (word === "basically") { basicallyCount++ }
    if (word.includes(".") || word.includes("!") || word.includes("?")) { sentencesCount++ }
}

// Test data
console.log(`Really is used in the paragraph ${reallyCount} times.`);
console.log(`Very is used in the paragraph ${veryCount} times.`);
console.log(`Basically is used in the paragraph ${basicallyCount} times.`);
console.log(`The paragraph contains ${sentencesCount} sentences total.\n`);
console.log(betterWords.join(" "));



