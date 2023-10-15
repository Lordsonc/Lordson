let paper = [
    {
      question: "What year did Nigeria gain its Independence ?",
      options: ["1959", "1999", "1872", "1960"],
      answer: "1960",
      chosen_answer: "",
    },
    {
      question: "What's the biggest city in Africa ?",
      options: ["Ibadan", "Kogi", "Oslo", "Cape Town"],
      answer: "Ibadan",
      chosen_answer: "",
    },
    {
      question: "What's the largest river in the world ?",
      options: ["River Jordan", "River Niger", "River Nile", "River Benue"],
      answer: "River Nile",
      chosen_answer: "",
    },
    {
      question: "Who's the current Nigeria president ?",
      options: [
        "Alhaji Sulu Gambari",
        "Professor Wole Soyinka",
        "Yemi osinbajo",
        "Bola Ahmed Tinubu",
      ],
      answer: "Bola Ahmed Tinubu",
      chosen_answer: "",
    },
    {
      question: "What year was Tele-Communication  introduced to Nigeria ?",
      options: ["1960", "1999", "2002", "1886"],
      answer: "1886",
      chosen_answer: "",
    },
    {
      question: "The first woman to drive in Nigeria  is ?",
      options: ["Chief Funmilayo Ransome-Kuti", "Chief Justice Oluwaseun Ojo", "Alakija Ibuowo", "Patience Jonathan"],
      answer: "Chief Funmilayo Ransome-Kuti",
      chosen_answer: "",
    },
    {
      question: "What's the largest continent in th world ?",
      options: ["Ameria", "Asia", "Europe", "Earth"],
      answer: "Asia",
      chosen_answer: "",
    },
    {
      question: "Ghana spends what currency ?",
      options: ["Dollars", "Pounds Sterling", "Cedis", "Naira"],
      answer: "Cedis",
      chosen_answer: "",
    },
    {
      question:
        "What's the capital of lagos ?",
      options: [
        "Lekki",
        "Isolo",
        "Ikoyi",
        "Ikeja",
      ],
      answer: "Ikeja",
      chosen_answer: "",
    },
    {
      question: "These aniamals lives in the water except ?",
      options: ["Fishes", "Crocodile", "Sharks", "Tiger"],
      answer: "Tiger",
      chosen_answer: "",
    },
  ];
  alltheabove.hidden = true;
  let index = 0;
  let score = 0;
  function displays() {
    if (!paper[index]) {
      return;
    }
    display1.innerHTML = `<div>
      <h1 class='text-primary'>CBT TEST</h1>
      <p> Question ${index + 1} of ${paper.length}</p>
      <h4>${paper[index].question}</h4>
      </div>`;
    paper[index].options.forEach(function (element) {
      display1.innerHTML += `<p><input type='radio' value='${element}'><i>${element}</i></p>`;
      document.querySelectorAll("input").forEach((box) => {
        box.addEventListener("click", answer);
        if (box.value == paper[index].chosen_answer) {
          box.checked = true;
        }
      });
    });
    display.innerHTML = `<div style="display:flex; justify-content: space-evenly;">
      <button class="btn btn-primary" onclick="prev()">Prev</button>
      <button class="btn btn-primary" style="margin-left: 10px;" onclick="next()">Next</button>
      <button class="btn btn-danger" style='margin-left: 10px;' onclick="submit()">Submit</button>
      </div>`;
  }
  displays();
  function next() {
    index++;
    displays();
  }
  function prev() {
    index--;
    displays();
  }
  function answer(params) {
    right.hidden = true;
    document.querySelectorAll("input").forEach((box) => {
      box.checked = false;
    });
  
    params.target.checked = true;
    paper[index].chosen_answer = params.target.value;
    if (paper[index].answer == paper[index].chosen_answer) {
      score++;
    }
  }
  function submit() {
    myname.hidden = true;
    timer.hidden = true;
    display1.innerHTML = "";
    display.innerHTML = "";
    answ.innerHTML = `<h2>${b.innerHTML}, your score is  ${score}  out of ${paper.length} questions`;
    // return;
  }
  let b = document.getElementById("myname");
  function start() {
    myname.hidden = false;
    document.getElementById("timer").style.display = "block";
    let a = examinerID.value;
  
    if (a != "") {
      b.innerHTML = a;
      alltheabove.hidden = false;
      answ.innerHTML = "";
      index = 0;
      all.hidden = true;
      displays();
      function stop() {
        let h = 60;
  
        let terminate = setInterval(() => {
          h--;
          if (h == 0) {
            clearInterval(terminate);
            submit();
          }
          timer.innerHTML = `<h3>00:0${h} of 60 seconds</h3>`;
        }, 1000);
      }
      stop();
    } else {
      alltheabove.hidden = true;
      phone.innerHTML = `<h1 >Please Enter Your Name</h1>`;
    }
  }
  start();
  