import anime from "animejs";

export default function () {
  let currentStepBelok = 0;
  let currentStepProb = 0;
  let currentStepMicro = 0;
  const stepsBelok = [
    { x: 0, y: 0, s: 1, z: 1 }, // Начальная позиция
    { x: "-1100", y: "-300", s: 0.55, z: -1 }, // Позиция 1
    { x: -230, y: -440, s: 0.45, z: -1 }, // Позиция 2
  ];
  const stepsProb = [
    { x: 0, y: 0, s: 1, z: -1 }, // Начальная позиция
    { x: 850, y: "-150", s: 0.7, z: -1 }, // Позиция 1
    { x: 1200, y: 380, s: 1.8, z: 1 }, // Позиция 2
  ];
  const stepsMicro = [
    { x: 0, y: 0, s: 1, z: -1 }, // Начальная позиция
    { x: 200, y: "500", s: 2, z: 1 }, // Позиция 1
    { x: -700, y: 150, s: 1.5, z: 1 }, // Позиция 2
  ];

  const belok = document.querySelector(".belok");
  const prob = document.querySelector(".probiotiki");
  const micro = document.querySelector(".mikro");

  function animateBelok(nextStep) {
    anime({
      targets: belok,
      keyframes: [
        {
          translateX: stepsBelok[nextStep].x + "px",
          translateY: stepsBelok[nextStep].y + "px",
          scale: stepsBelok[nextStep].s,
          zIndex: stepsBelok[nextStep].z,
        },
      ],

      duration: 800,
      easing: "easeInOutQuad",
    });
  }

  function animateProb(nextStep) {
    anime({
      targets: prob,
      keyframes: [
        {
          translateX: stepsProb[nextStep].x + "px",
          translateY: stepsProb[nextStep].y + "px",
          scale: stepsProb[nextStep].s,
          zIndex: stepsProb[nextStep].z,
        },
      ],

      duration: 800,
      easing: "easeInOutQuad",
    });
  }

  function animateMicro(nextStep) {
    anime({
      targets: micro,
      keyframes: [
        {
          translateX: stepsMicro[nextStep].x + "px",
          translateY: stepsMicro[nextStep].y + "px",
          scale: stepsMicro[nextStep].s,
          zIndex: stepsMicro[nextStep].z,
        },
      ],

      duration: 800,
      easing: "easeInOutQuad",
    });
  }

  function updateStep(direction) {
    if (direction === "forward") {
      currentStepBelok = (currentStepBelok + 1) % stepsBelok.length;
      currentStepProb = (currentStepProb + 1) % stepsProb.length;
      currentStepMicro = (currentStepMicro + 1) % stepsMicro.length;
    } else {
      currentStepBelok =
        (currentStepBelok - 1 + stepsBelok.length) % stepsBelok.length;
      currentStepProb =
        (currentStepProb - 1 + stepsProb.length) % stepsProb.length;
      currentStepMicro =
        (currentStepMicro - 1 + stepsMicro.length) % stepsMicro.length;
    }
    animateBelok(currentStepBelok);
    animateProb(currentStepProb);
    animateMicro(currentStepMicro);
  }

  let startX;
  const container = document.querySelector(".content");
  container.addEventListener("mousedown", function (e) {
    startX = e.pageX;
  });

  container.addEventListener("mouseup", function (e) {
    const endX = e.pageX;
    if (startX > endX) {
      updateStep("backward");
    } else {
      updateStep("forward");
    }
  });
}
