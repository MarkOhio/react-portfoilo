
import { useEffect, useRef, useState } from 'react';
import '../styles/tetscramble.css';
import '../styles/theme.css'

const CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]/?<>';

export default function TechScramble() {
  const words = [
    'Web Developer',
    'JavaScript Master',
    'UI/UX Designer',
    'TypeScript User',
    'pim pim User'
    
  ];

  const [output, setOutput] = useState('');
  const indexRef = useRef(0);
  const frameRef = useRef<number>();
  const resolvingRef = useRef(false);

  const interval = 4000;
  const speed = 10;

  const scramble = (target: string) => {
    let frame = 0;
    resolvingRef.current = false;

    const run = () => {
      frame++;
      const progress = frame / (speed * 0.6);
      const length = target.length;

      const revealed = resolvingRef.current
        ? Math.floor(progress * length)
        : 0;

      const result = target
        .split('')
        .map((char, i) => {
          if (i < revealed) return char;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        })
        .join('');

      setOutput(result);

      if (!resolvingRef.current && frame >= speed) {
        resolvingRef.current = true;
        frame = 0;
      }

      if (resolvingRef.current && revealed >= length) return;

      frameRef.current = requestAnimationFrame(run);
    };

    cancelAnimationFrame(frameRef.current!);
    frameRef.current = requestAnimationFrame(run);
  };

  useEffect(() => {
    const cycle = () => {
      const target = words[indexRef.current];
      scramble(target);
      indexRef.current = (indexRef.current + 1) % words.length;
    };

    cycle();
    const timer = setInterval(cycle, interval);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(frameRef.current!);
    };
  }, []);

  return <span className="techscramble">{output}</span>;
}