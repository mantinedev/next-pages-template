import { createStyles } from '@mantine/core';
import { FC } from 'react';

type HamburgerProps = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

const Hamburger: FC<HamburgerProps> = ({ open, onClick, className }) => {
  const { classes, cx } = useStyles();

  return (
    <svg
      className={cx(classes.ham, open && classes.active, className)}
      viewBox="0 0 100 100"
      onClick={onClick}
    >
      <path
        className={cx(classes.line, classes.top)}
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path className={cx(classes.line, classes.middle)} d="m 30,50 h 40" />
      <path
        className={cx(classes.line, classes.bottom)}
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
  );
};

export default Hamburger;

const useStyles = createStyles((theme, _params, getRef) => ({
  ham: {
    userSelect: 'none',
    transition: 'transform 400ms',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    fontSize: '4rem',
    width: '1em',
  },
  active: {
    transform: 'rotate(45deg)',

    [`.${getRef('top')}`]: {
      strokeDashoffset: '-64px',
    },

    [`.${getRef('middle')}`]: {
      transform: 'rotate(90deg)',
    },

    [`.${getRef('bottom')}`]: {
      strokeDashoffset: '-64px',
    },
  },
  line: {
    fill: 'none',
    transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms',
    stroke: theme.black,
    strokeWidth: '5.5',
    strokeLinecap: 'round',
  },
  top: {
    ref: getRef('top'),
    strokeDasharray: '40 160',
  },
  middle: {
    ref: getRef('middle'),
    strokeDasharray: '40 142',
    transformOrigin: '50%',
    transition: 'transform 400ms',
  },
  bottom: {
    ref: getRef('bottom'),
    strokeDasharray: '40 85',
    transformOrigin: '50%',
    transition: 'transform 400ms, stroke-dashoffset 400ms',
  },
}));
