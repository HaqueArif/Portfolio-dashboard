export const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

// left section

export const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

export const introChildren2 = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5, delay: 1 },
  },
};
export const introChildren3 = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5, delay: 1.25 },
  },
};
export const introChildren4 = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5, delay: 1.5 },
  },
};

// right section
export const introChildrenRight = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};
export const introChildrenRight1 = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    x: -50,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};
export const introChildrenRight2 = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 50,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};
