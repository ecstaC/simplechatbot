function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerText = userInput;
    chatbox.appendChild(userMessage);

    // Simple responses
    let botResponse = "I'm sorry, I didn't understand that.";
    if (userInput.includes('hello') || userInput.includes('hi')) {
      botResponse = "Hello! These are the input available: help; thank you; joke; favorite color; homework; story; sad; bored; language; How can I assist you today?";
    } else if (userInput.includes('help')) {
      botResponse = "Sure! What do you need help with? ";
    } else if (userInput.includes('thank you')) {
      botResponse = "You're welcome! Let me know if you need anything else.";
    } else if (userInput.includes('joke')) {
        botResponse = "Sure, here’s a joke: Why did the chicken cross the road? To get to the other side!";
    } else if (userInput.includes('favorite color')) {
        botResponse = "As an AI language model, I don't have personal preferences. But I do find blue to be a very calming color.";
    } else if (userInput.includes('homework')) {
        botResponse = "Absolutely! I can provide information and answer questions. Just send me the question or topic and I'll do my best to assist you.";
    } else if (userInput.includes('story')) {
        botResponse = "Once upon a time, in a land far away...";
    } else if (userInput.includes('sad')) {
        botResponse = "I'm sorry to hear that. Sometimes, it's helpful to talk about how you're feeling. Would you like to share?";
    } else if (userInput.includes('bored')) {
        botResponse = "Let's play a game! How about we play \"20 Questions\"?";
    } else if (userInput.includes('language')) {
        botResponse = "Absolutely! I can provide you with vocabulary, grammar exercises, and conversation practice. Which language would you like to learn?";
    } else {
        botResponse = "I'm not sure I understand. Could you please rephrase your question?";
    }

    // Display bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.innerText = botResponse;
    chatbox.appendChild(botMessage);

    // Clear input field
    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
  }
