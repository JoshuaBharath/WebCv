/*let observer0 = new IntersectionObserver((obv) => {
  let welcomContainers = document.getElementsByClassName("welcomContainers")[0];
  obv.forEach((e) => {
    if (e.isIntersecting) {
      welcomContainers.setAttribute("id", "welcomContainers");
    }
  });
});
observer0.observe(document.getElementById("slideLeft0")); */

let observer1 = new IntersectionObserver((obv) => {
  obv.forEach((e) => {
    let AboutMe = document.getElementsByClassName("AboutMe")[0];
    if (e.isIntersecting) {
      AboutMe.setAttribute("id", "AboutMe");
    }
  });
});

observer1.observe(document.getElementById("slideRight0"));
let x = 1;
let counter = 2000;
setInterval(() => {
  if (x == 6) {
    x = 1;
  } else {
    document.getElementById("btn" + x).checked = true;
    x++;
  }
}, counter);

let observe2 = new IntersectionObserver(
  (obe) => {
    obe.forEach((e) => {
      let slideAndExplanation = document.getElementsByClassName(
        "slideAndExplanation0"
      )[0];
      if (e.isIntersecting) {
        slideAndExplanation.setAttribute("id", "slideAndExplanation");
      } else {
        slideAndExplanation.setAttribute("id", "");
      }
    });
  },
  { threshold: "0.01" }
);
observe2.observe(document.getElementById("slideLeft1"));

let observe3 = new IntersectionObserver(
  (obe) => {
    obe.forEach((e) => {
      let gridSlid = document.getElementsByClassName("timeLine");
      if (e.isIntersecting) {
        gridSlid[0].setAttribute("id", "timeLine1");
        gridSlid[1].setAttribute("id", "timeLine2");
        gridSlid[2].setAttribute("id", "timeLine3");
      } else {
        gridSlid[0].setAttribute("id", "");
        gridSlid[1].setAttribute("id", "");
        gridSlid[2].setAttribute("id", "");
      }
    });
  },
  { threshold: 0.1 }
);
observe3.observe(document.getElementById("slideAnyWhere"));

let BCResultBtn = document.getElementById("BCResultBtn");
BCResultBtn.addEventListener("click", () => {
  let BCResultBackground0 = document.getElementById("BCResultBackground");
  BCResultBackground0.style.top = "0vh";
});

let BCResultBackground = document.getElementById("BCResultBackground");
BCResultBackground.addEventListener("click", () => {
  BCResultBackground.style.top = "-100vh";
});
let closeSymble = document.getElementById("closeSymble");
closeSymble.addEventListener("click", () => {
  BCResultBackground.style.top = "-100vh";
});

document.addEventListener("mousemove", (e) => {
  let curser = document.getElementById("cursor");
  let left = e.pageX;
  let up = e.pageY;
  curser.style.left = left + "px";
  curser.style.top = up + "px";
  curser.style.display = "block";

  let mouseStop = setTimeout(() => {
    curser.style.display = "none";
    console.log(0);
  }, 1000);
  clearTimeout(mouseStop);
});

document.addEventListener("mouseout", () => {
  let curser = document.getElementById("cursor");
  curser.style.display = "none";
});
let BCResultBackground2 = document.getElementById("BCResultBackground2");
let BCResultBtn2 = document.getElementById("BCResultBtn2");
BCResultBtn2.addEventListener("click", () => {
  BCResultBackground2.style.top = "0px";
});

BCResultBackground2.addEventListener("click", () => {
  BCResultBackground2.style.top = "-100%";
});

let close2 = document.getElementById("close2");
close2.addEventListener("click", () => {
  BCResultBackground2.style.top = "-100%";
});

let BCResultBtn1 = document.getElementById("BCResultBtn1");
let BCResultBackground1 = document.getElementById("BCResultBackground1");
BCResultBtn1.addEventListener("click", () => {
  BCResultBackground1.style.top = "0px";
});

BCResultBackground1.addEventListener("click", () => {
  BCResultBackground1.style.top = "-100%";
});

let observeRefHead = new IntersectionObserver((obe) => {
  let headingReference = document.getElementsByClassName("headingReference")[0];
  obe.forEach((e) => {
    if (e.isIntersecting) {
      headingReference.setAttribute("id", "headingReference");
    } else {
      headingReference.setAttribute("id", "");
    }
  });
});
observeRefHead.observe(document.getElementById("headRef"));

let observeDell = new IntersectionObserver((obe) => {
  let dellRef = document.getElementsByClassName("dellRef")[0];
  let dellRef1 = document.getElementsByClassName("dellref1")[0];
  let dellRef2 = document.getElementsByClassName("dellref2")[0];

  obe.forEach((e) => {
    if (e.isIntersecting) {
      dellRef.setAttribute("id", "dellRef");

      setTimeout(() => {
        dellRef1.setAttribute("id", "dellref1");
      }, 500);
      setTimeout(() => {
        dellRef2.setAttribute("id", "dellref2");
      }, 1000);
    } else {
      dellRef.setAttribute("id", "");
      dellRef1.setAttribute("id", "");
      dellRef2.setAttribute("id", "");
    }
  });
});
observeDell.observe(document.getElementById("dellRefCon"));

let link1 = document.querySelectorAll(".link1");
let section = document.querySelectorAll("section");

function activateMenu() {
  let len = section.length;
  while (--len && window.scrollY + 400 < section[len].offsetTop) {}
  link1.forEach((link) => {
    link.classList.remove("active");
  });
  link1[len].classList.add("active");
}

window.addEventListener("scroll", activateMenu);
let valueCell = true;
let cellphone = document.querySelector("#cellphone");
cellphone.addEventListener("click", () => {
  let label1 = document.querySelector("#label1");
  if (valueCell) {
    label1.setAttribute("style", "margin-left:0vw;");
    valueCell = false;
  } else {
    label1.setAttribute("style", " margin-left: -20vw;");
    valueCell = true;
  }
});

let valueEmail = true;
let email = document.querySelector("#email");
email.addEventListener("click", () => {
  let label2 = document.querySelector("#label2");
  if (valueEmail) {
    label2.setAttribute("style", "margin-left:0vw;");
    valueEmail = false;
  } else {
    label2.setAttribute("style", "margin-left: -20vw;");
    valueEmail = true;
  }
});

let workXPObserve = new IntersectionObserver((obe) => {
  obe.forEach((e) => {
    let workXpHeading = document.getElementsByClassName("workXpHeading")[0];
    let workXpParagraph = document.getElementsByClassName("workXpParagraph")[0];
    if (e.isIntersecting) {
      workXpHeading.setAttribute("id", "workXpHeading");
      workXpParagraph.setAttribute("id", "workXpParagraph");
    } else {
      workXpHeading.setAttribute("id", "");
      workXpParagraph.setAttribute("id", "");
    }
  });
});

workXPObserve.observe(document.getElementById("workXp"));
