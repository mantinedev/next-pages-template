import type { NextPage } from 'next';
import { useState } from 'react';
import Hamburger from '../components/Hamburger';

const Home: NextPage = () => {
  const [active, setActive] = useState(false);

  return <Hamburger open={active} onClick={() => setActive(!active)} />;
};

export default Home;
