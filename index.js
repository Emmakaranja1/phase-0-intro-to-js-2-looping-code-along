// Code your solutions in this file
function writeCards(names, eventName) {
    const messages = []; // Create an empty array to store the messages

    // Loop through each name in the names array
    for (let i = 0; i < names.length; i++) {
        // Create a personalized message and push it to the messages array
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return messages; // Return the array of messages
}
function countDown(number) {
    // Step 1: Create a for loop that starts at the provided number and counts down to zero
    for (let i = number; i >= 0; i--) {
        // Step 2: Log each number to the console
        console.log(i);
    }
}