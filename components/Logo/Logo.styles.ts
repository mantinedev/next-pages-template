import { createStyles, keyframes } from '@mantine/core';

// Export animation to reuse it in other components
export const dash = keyframes({
  to: { strokeDashoffset: 0 },
});

export const fill = keyframes({
  from: { fillOpacity: 0 },
  to: { fillOpacity: 1 },
});

export default createStyles(() => ({
  logoContainer: {
    // marginTop: '2rem', marginBottom: '2rem'
  },

  path: {
    strokeDasharray: '2000',
    strokeDashoffset: 2000,
    fill: '#3B5BDB',
    fillOpacity: 0,
    animation: `${dash} 3s ease forwards, ${fill} 0.5s ease forwards 1.9s`,
  },

  path2: {
    strokeDasharray: '2000',
    strokeDashoffset: 2000,
    fill: '#3B5BDB',
    fillOpacity: 0,
    animation: `${dash} 3s ease forwards, ${fill} 0.5s ease forwards 1.9s`,
  },
}));
