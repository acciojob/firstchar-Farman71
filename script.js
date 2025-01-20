function firstChar(text) {
    // Trim the string to remove spaces from the beginning and end
    let string = text.trim();
    // Return the first character or an empty string if there's nothing after trimming
    return string.length > 0 ? string.charAt(0) : '';
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));