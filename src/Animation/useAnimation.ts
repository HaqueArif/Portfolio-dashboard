export const fadeInRight = {
  initial: { opacity: 0, x: 200 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: "spring", bounce: 0.5 },
  },
};
export const fadeInLeft = {
  initial: { opacity: 0, x: -200 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: "spring", bounce: 0.5 },
  },
};
export const fadeInTop = {
  initial: { opacity: 0, y: -100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1, type: "spring", stiffness: 100 },
  },
};
export const fadeInBottom = {
  initial: { opacity: 0, y: 200 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};
export const fadeInBounce = {
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.5,
      stiffness: 100,
    },
  },
};
export const flipRight = {
  initial: { opacity: 0.5, rotateY: 90 },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 5,
      type: "spring",
      bounce: 0.5,
    },
  },
};
export const flipLeft = {
  initial: { opacity: 0.5, rotateY: -90 },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 5,
      type: "spring",
      bounce: 0.5,
    },
  },
};
export const flip = {
  initial: { opacity: 0.5, rotateY: -190 },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 5,
      type: "spring",
      bounce: 0.5,
    },
  },
};

export const rotateLeft = {
  initial: { opacity: 0, rotate: -45 },
  whileInView: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};
export const rotateRight = {
  initial: { opacity: 0, rotate: 45 },
  whileInView: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};

// Our service section
export const animationVariants = [
  {
    initial: { opacity: 0, x: -300 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  },
  {
    initial: { opacity: 0, y: 200 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  },
  {
    initial: { opacity: 0, x: 300 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  },
];

//
