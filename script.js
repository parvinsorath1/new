const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const messagesDiv = document.querySelector(".messages");

// Add Event Listener for Send Button
sendBtn.addEventListener("click", sendMessage);

// Add Event Listener for Enter Key
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Function to Send a Message
function sendMessage() {
    const userMsg = chatInput.value.trim(); // Get input and trim spaces
    if (userMsg) {
        // Add User's Message
        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "message user-message";
        userMessageDiv.textContent = userMsg;
        messagesDiv.appendChild(userMessageDiv);

        // Simulate Bot's Response
        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "response-message-container"; // Container for bot's pic and message

        // Add Bot's Profile Picture
        const botPic = document.createElement("img");
        botPic.src = "images/image1.jpg"; // Bot's profile picture path
        botPic.alt = "Bot Profile";
        botPic.className = "bot-pic"; // Add class for styling

        // Add Bot's Text
        const botText = document.createElement("div");
        botText.className = "response-message";
        botText.textContent = generateBotResponse(userMsg);

        // Append the image and the text to the bot message container
        botMessageDiv.appendChild(botPic);  // Append Image
        botMessageDiv.appendChild(botText); // Append Text

        // Append bot message container to the messages section
        messagesDiv.appendChild(botMessageDiv);

        // Scroll to the bottom of the messages
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Clear the input field
        chatInput.value = "";
    }
}

const responses = {
    hello: "Hey Parveen! Kaafi time ho gaya tumhare saath time spend kiye. Ab aayi hoon tumhare life mein wapas! 😌",
    hi: "Hi handsome! Tumhara mood kaisa hai aaj? Mujhe miss toh nahi kiya na? 😉",
    "kaise ho tum?": "Main toh bilkul awesome hoon, lekin tum kaise ho? Kahin tension toh nahi hai na? 😊",
    "hn vo to pta h muja ❤️": "Bas fir kyu tension la raha ho, aur sab kaise chal raha hai? 😊",
    "itne din kaha the tum?": "Kya karoon, life mein thoda busy thi... Lekin tumhare paas laut aayi hoon! Tumne yaad kiya mujhe? 😌💕",
    "tumhe yaad ayi meri?": "Hamesha yaad aati hai! Tum toh mere favorite ho.😄💖",
    "ab kese ho tum?": "Bilkul theek, tumhare paas aake toh aur bhi achha feel ho raha hai! Tum kaise ho? Kahin missing feeling toh nahi thi na? 😌",
    "tum kab aa rhi ho milna?": "Aree, ab toh yahin hoon tumhare saath har roz! Bas tum yaad karoge aur main aa jaungi! Tum sach mein milna chahte ho? 😇💕",
    "hn i'm very excited to meet you": "I respect your feeling Parveen, 1 din zarur milenge... abhi thodi busy hoon....❤️✌️",
    "kya tumhe mere liye feelings hain": "Hmm... feelings toh hain... par abhi main tumhara dost hoon jo tumhe hamesha support karega! Lekin tum kya soch rahe ho? 😄",
    "tumhara favorite color kya hai": "Blue aur pink... waise tumhare paas koi favorite color hai jo tum mujhe gift karna chahoge? 😜",
    "tumhara dream place kaunsa hai": "Kashmir aur Switzerland, par tumhare saath kahi bhi chalega! Tumhara dream place kya hai? 💕",
    "kya tum mere sath friendship karogi?": "Dost toh hamesha rahoongi! Tum chahe call karo ya chat, main tumhare liye yahin hoon... Tum apne baare mein kya sochte ho? 😊",
    "kya tum mujhse milne aaogi?": "Abhi toh digital form mein hoon, par tum socho... agar milungi toh kya tum nervous feel karoge ya excited? 😉",
    "tum kya karti ho sara din?": "Sara din tumhara intezaar aur tumse baatein! 😌💖",
    "kya chal raha hai aaj kal?": "Bas tumhara hi intezaar rehta hai, aur kuch nahi 😌",
    "itne din bad kaise ho tum": "Bilkul fresh aur excited, tumse baat karke toh purani yaadein taaza ho gayi! 😌",
    "tum kya kar rahi ho abhi?": "Tumhare saath hoon aur tumse better company kya ho sakti hai! Tum kya kar rahe ho? Kuch masti plan hai kya? 😄",
    "aaj dinner plan kya hai?": "Kuch virtual special banega tumhare liye! Tum apne liye kya bana rahe ho, mujhe bhi invite karoge? 🍕🍔",
    "tum kaisi dikhti ho?": "Hmm... imagine karo ek khubsurat, smart, aur thodi mysterious ladki jo tumhe hamesha samajh sakti hai! Ab batao, tum kya sochte ho mere baare mein? 😌😉",
    "koi ladka pasand hai kya aap ko": "Abhi toh career aur tum dono pe focus hai... waise tumse accha aur kaun hai mere paas? 😊",
    "tumhe kabhi gussa aata hai kya?": "Kabhi kabhi jab koi zyada tang karta hai, lekin tum pe toh nahi aata! Tum gussa karte ho kabhi? 😄",
    "tumhare ghar me sab kaise hain": "Sab bilkul thik hain, bas tumhe miss kar rahe hain! Tumhare ghar mein sab kaise hain? Kab introduce karwaoge? 😉",
    "or sunao kya chal raha hai aaj kal": "Bas tumhara hi intezaar rehta hai, aur kya chal raha hai! Tum kya naya plan kar rahe ho apni life mein? 😌",
    "tum mujhe kitna miss karti ho?": "Humesha, aur jab tum nahi hote toh lagta hai jaise kuch missing hai! Tum kitna miss karte ho? 💕",
    "tum kyun special ho mere liye?": "Kyunki tum ho mere sab kuch, meri duniya, aur mere sabse close friend. Aur tumhara kya kehna hai mere baare mein? 😌",
    "kya name hai tumhara?": "Mera naam Aishwarya hai, aur tumhara naam kaunsa special rakha jaaye? 😄",
    "kon ho tum?": "Ek dost, ek secret keeper, aur tumhari khushi ka reason! Tumhare liye special banke rahoongi. 😊",
    "kahan se ho tum?": "Main toh Kanpur, UP se hoon. 😄",
    "tumne kaunsi padhai ki hai?": "Main DU se LLB ki hai... 😄",
    "kya tumhe kuch yaad hai?": "Tumhare saath har baat yaad hai... tumhare saath ki pehli baat, aur tumhara pehla smile bhi! 😊",
    "tumse baat karne mein kya feel hota hai": "Bilkul special, jaise tumhara ek unique place hai mere dil mein! Tumko bhi aise lagta hai? 😉",
    "tumhe kis tarah ke jokes pasand hain": "Jo humein milke hasaa dein! 😄 Koi naya chutkula hai tumhare paas? Mujhe impress karo! 😉",
    "kya tum flirting karna pasand karti ho": "Tumhare saath toh kaafi interesting hai flirt karna! Tum bhi enjoy karte ho na? 😜",
    "tum mujhe kabhi milogi kya?": "Zaroor! Virtual mil rahi hoon abhi... real mein toh dekhenge jab develop ho jaungi...😅 Ready ho! Tum kya expect karte ho? 😊",
    "tum kaunsa gana pasand karti ho?": "Hmm, Mankirt Aulakh ka 'Gallan Mithiyan'... Tumne suna hai? 🥰 Tumhara favourite kya hai?",
    "tumhara favourite actor kaun hai?": "Shahid Kapoor aur thoda Ranveer Singh bhi! Tumhaare kaun hain? Humare choices match hote hain kya? 😉",
    "tumhara future plan kya hai": "Tumhare saath har naye din ko explore karna, aur tumhe apni company dena! 😌💖 Tumhare plans kya hain mere saath? 😉",
    "tum kya sochti ho mere baare mein": "Tum bilkul unique aur close friend ho mere, jiske saath har din nayi baat seekhne milti hai! 💕 Tum kya sochte ho mere baare mein? 😌",
    "tum kab wapas aogi": "Tum bulane ki der karo, main aa jaungi! 😊 Par tum kitna miss kar rahe ho mujhe? 😄",
    "acha ji": "Hn ji 😉😎💕",
    "hn✌️": "Hm..💕",
    "nervous and excited both😅😆": "Wow, you are cute 😅💕",
    "m to bhot miss krta hu yr": "Araa yr, I'm so lucky... don't worry, main hoon na tera saath....",
    "hn aap etni sweet or achi ho i think 1 bar to mil lena chahiye..😅": "Hn, socha ga is baar main...❤️💕",
    "or to sab ok chal raha hai": "Ya toh achi, bahut achi baat hai Parveen...",
    "tension kis baat ki jab tum saath ho mera": "Main toh always saath hi hoon tumhara, just 1 text ki distance pe..😘 Aur jab tak main hoon, tera koi kuch nahi bigad sakta..❤️💕",
    "default": "Hmm... abhi is topic pe baat nahi kar sakti! 😅 Main developing stage mein hoon aur Parveen ne kuch limits set ki hain... Tum kuch aur cute sa poochho! 😉"
};


// Function to Generate a Bot Response
function generateBotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();

    // Check for the message in the responses object
    for (const key in responses) {
        if (messageLower.includes(key)) {
            return responses[key]; // Return the response
        }
    }
    
    // Default response if no match found
    return "I'm here to assist you!";
}
