//  (actualWords / totalTimeTaken) * 60;

const typing_ground = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const score = document.querySelector("#score");
const show_sentence = document.querySelector("#showSentence");

let startTime, endTime, totalTimeTaken;

const sentences = [
  "Life is either a daring adventure or nothing at all",
  "You must be the change you wish to see in the world",
  "Start where you are , use what you have , do what you can",
  "Happiness is not something ready made it comes from your own actions",
  "Change your thoughts and you change your world",
  "The purpose of life is to believe, to hope, and to strive",
  "The best way to find yourself is to lose yourself in the service of others ",
];

// step 5

const calculateTypingSpeed = (time_taken) => {
  let totalWords = typing_ground.value.trim();
  let actualWords = totalWords === "" ? 0 : totalWords.split(" ").length;

  if (actualWords !== 0) {
    let typing_speed = (actualWords / time_taken) * 60;
    typing_speed = Math.round(typing_speed);
    score.innerHTML = `Your typing speed is ${typing_speed} words per minutes \n & you wrote ${actualWords} words & time taken ${time_taken} sec`;
  } else {
    score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
  }
};

// step 4
const endTypingTest = () => {
  btn.innerText = "Start";

  let date = new Date();
  endTime = date.getTime();

  totalTimeTaken = (endTime - startTime) / 1000;

  // console.log(totalTimeTaken);

  calculateTypingSpeed(totalTimeTaken);

  show_sentence.innerHTML = "";
  typing_ground.value = "";
};

// step 3
const startTyping = () => {
  let randomNumber = Math.floor(Math.random() * sentences.length);
  // console.log(randomNumber);
  show_sentence.innerHTML = sentences[randomNumber];

  let date = new Date();
  startTime = date.getTime();

  btn.innerText = "Done";
};

// step 2
btn.addEventListener("click", () => {
  switch (btn.innerText.toLowerCase()) {
    case "start":
      typing_ground.removeAttribute("disabled");
      startTyping();
      break;

    case "done":
      typing_ground.setAttribute("disabled", "true");
      endTypingTest();
      break;
  }
});