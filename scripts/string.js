function stringCheck() {
    let text = 'Hello World';
    let anons = 'Using different string check:';

    document.getElementById('string').innerHTML = anons + '<br>';
    document.getElementById('string').innerHTML += text.length + ' :Length of text' + '<br>';
    document.getElementById('string').innerHTML += text.charAt(0) + ' :First character (charAt)<br>';
    document.getElementById('string').innerHTML += text.charCodeAt(0) + ' :UTF-16 code of first character (charCodeAt)<br>';
    document.getElementById('string').innerHTML += text.codePointAt(0) + ' :Unicode code point of first character (codePointAt)<br>';
    document.getElementById('string').innerHTML += text.at(2) + ' :Character at index 2 (at)<br>';
    document.getElementById('string').innerHTML += text[2] + ' :Character at index 2 (bracket notation)<br>';
    document.getElementById('string').innerHTML += text.at(-5) + ' :5th character from the end (at with negative index)<br>';
    document.getElementById('string').innerHTML += text.charAt(text.length - 5) + ' :5th character from the end (charAt with length-N)<br>';
    document.getElementById('string').innerHTML += text.concat('! ', '<br>' + anons) + ' :Concatenated string (concat) add two variables. UP<br>';
    document.getElementById('string').innerHTML += text.slice(0, 5) + ' :First 5 characters (slice)<br>';
    document.getElementById('string').innerHTML += text.substring(0, 5) + ' :First 5 characters (substring)<br>';
    document.getElementById('string').innerHTML += text.substr(0, 5) + ' :First 5 characters by the length (substr)<br>';
    document.getElementById('string').innerHTML += text.substr(-5) + ' :Last 5 characters by the length (substr with negative index)<br>';
    document.getElementById('string').innerHTML += text.toUpperCase() + ' :Text in uppercase (toUpperCase)<br>';
    document.getElementById('string').innerHTML += text.toLowerCase() + ' :Text in lowercase (toLowerCase)<br>';
    document.getElementById('string').innerHTML += text.isWellFormed() + ' :Check if text is well-formed (isWellFormed)<br>';
    document.getElementById('string').innerHTML += text.toWellFormed() + ' :Convert text to well-formed (toWellFormed)<br>';
    document.getElementById('string').innerHTML += text.trim() + ' :Trim whitespace from both ends (trim)<br>';
    document.getElementById('string').innerHTML += text.trimStart() + ' :Trim whitespace from the start (trimStart)<br>';
    document.getElementById('string').innerHTML += text.trimEnd() + ' :Trim whitespace from the end (trimEnd)<br>';
    document.getElementById('string').innerHTML += text.padStart(20, '*') + ' :Pad the start of the string to a total length of 20 with * (padStart)<br>';
    document.getElementById('string').innerHTML += text.padEnd(20, '*') + ' :Pad the end of the string to a total length of 20 with * (padEnd)<br>';
    document.getElementById('string').innerHTML += text.repeat(3) + ' :Repeat the string 3 times (repeat)<br>';
    document.getElementById('string').innerHTML += text.replace('World', 'JavaScript') + ' :Replace "World" with "JavaScript" (replace)<br>';
    document.getElementById('string').innerHTML += text.replaceAll('l', 'L') + ' :Replace all occurrences of "l" with "L" (replaceAll)<br>';
    document.getElementById('string').innerHTML += text.split(' ') + ' :Split the string into an array of substrings (split)<br>';


    return true
}

function findStringCheck() {
    let text = 'Hello World';
    let anons = 'Using different finding string check:';

    document.getElementById('string').innerHTML = anons + '<br>';
    document.getElementById('string').innerHTML += text.indexOf('World') + ' :Index of "World" (indexOf)<br>';
    document.getElementById('string').innerHTML += text.lastIndexOf('l') + ' :Last index of "l" (lastIndexOf)<br>';
    document.getElementById('string').innerHTML += text.search('World') + ' :Search for "World" (search)<br>';
    document.getElementById('string').innerHTML += text.match(/World/) + ' :Match "World" (match)<br>';
    document.getElementById('string').innerHTML += text.match(/World/g) + ' :Match all occurrences of "World" (match with global flag)<br>';
    document.getElementById('string').innerHTML += text.matchAll(/l/g) + ' :Match all occurrences of "l" (matchAll with global flag)<br>';
    document.getElementById('string').innerHTML += text.includes('World') + ' :Check if string includes "World" (includes)<br>';
    document.getElementById('string').innerHTML += text.startsWith('Hello') + ' :Check if string starts with "Hello" (startsWith)<br>';
    document.getElementById('string').innerHTML += text.endsWith('World') + ' :Check if string ends with "World" (endsWith)<br>';

    return true
}