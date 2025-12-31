
import React, { useEffect, useRef, useState } from 'react'; 
import '../styles/PriceQuestion.css';

/* =====================  EDIT HERE ONLY  ===================== */
const VIDEO_SRC       = '/demovid.mp4';
const VIDEO_STOPS     = [5, 15, 20, 30];
const MANUAL_DISCOUNT = 0;

const QUESTIONS = [
  {
    id: 'type',
    text: 'What type of website do you want?',
    options: [
      { label: 'Basic Blog',      value: 'Basic Blog',      price: 50_000 },
      { label: 'Business Site',   value: 'Business Site',   price: 80_000 },
      { label: 'E-Commerce',      value: 'E-Commerce',      price: 150_000 },
    ],
  },
  {
    id: 'pages',
    text: 'How many pages do you need?',
    options: [
      { label: '1-5 pages',   value: '1-5 pages',   price: 0 },
      { label: '6-15 pages',  value: '6-15 pages',  price: 30_000 },
      { label: '16+ pages',   value: '16+ pages',   price: 60_000 },
    ],
  },
  {
    id: 'seo',
    text: 'Do you need SEO optimisation?',
    options: [
      { label: 'None',         value: 'None',         price: 0 },
      { label: 'Basic SEO',    value: 'Basic SEO',    price: 25_000 },
      { label: 'Advanced SEO', value: 'Advanced SEO', price: 50_000 },
    ],
  },
   {
    id: 'goal',
    text: 'Do you need goal',
    options: [
      { label: 'None',         value: 'None',         price: 0 },
      { label: 'Basic goal',    value: 'Basic goal',    price: 25_000 },
      { label: 'Advanced goal', value: 'Advanced goal', price: 50_000 },
    ],
  },
];
/* ============================================================ */


/* ----------  NUMBER TO WORDS (₦)  ---------- */
const SMALL = ['zero','one','two','three','four','five','six','seven','eight','nine'];
const TEENS = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const TENS  = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const SCALES= ['','thousand','million','billion','trillion'];

function numToWords(n: number): string {
  if (n < 0) return 'minus ' + numToWords(-n);
  if (n === 0) return 'zero naira';

  let words = '';
  let scaleIdx = 0;

  while (n > 0) {
    const chunk = n % 1000;
    n = Math.floor(n / 1000);
    if (chunk) {
      const chunkStr = chunkHelper(chunk);
      words = chunkStr + (SCALES[scaleIdx] ? ' ' + SCALES[scaleIdx] : '') + (words ? ' ' + words : '');
    }
    scaleIdx++;
  }

  return words + ' naira';

  function chunkHelper(num: number): string {
    if (num === 0) return '';
    if (num < 10) return SMALL[num];
    if (num < 20) return TEENS[num - 10];
    if (num < 100) return TENS[Math.floor(num / 10) - 2] + (num % 10 ? ' ' + SMALL[num % 10] : '');
    return SMALL[Math.floor(num / 100)] + ' hundred' + (num % 100 ? ' ' + chunkHelper(num % 100) : '');
  }
}


/* ----------  COMPONENT  ---------- */
function ProjectPriceQuestion(): JSX.Element {
  const videoEl = useRef<HTMLVideoElement>(null);

  const [answers, setAnswers] = useState<
    Record<string, typeof QUESTIONS[0]['options'][0]>
  >({});

  const [qIdx , setQIdx ] = useState(0);
  const [done , setDone ] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [lock, setLock] = useState(false); // prevents double modal triggers


  /* ---- pause + show modal exactly at stop ---- */
  useEffect(() => {
    const v = videoEl.current;
    if (!v) return;

    const check = () => {
      const stop = VIDEO_STOPS[qIdx];

      if (stop === undefined) return;

      if (!lock && v.currentTime >= stop) {
        v.pause();
        setModalVisible(true);
        setLock(true);
      }
    };

    v.addEventListener('timeupdate', check);
    return () => v.removeEventListener('timeupdate', check);
  }, [qIdx, lock]);


  /* ---- choose answer ---- */
  const choose = (opt: typeof QUESTIONS[0]['options'][0]) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[qIdx].id]: opt }));

    const next = qIdx + 1;
    if (next >= QUESTIONS.length) setDone(true);

    setQIdx(next);
    setModalVisible(false);
    setLock(false);
    videoEl.current?.play();
  };


  /* ---- price ---- */
  const raw   = Object.values(answers).reduce((t, o) => t + o.price, 0);
  const price = Math.max(0, raw - MANUAL_DISCOUNT);


  /* ---- WhatsApp ---- */
  const waText =
    'https://wa.me/?text=' +
    encodeURIComponent(
      `Hi, I want to create a website with: ${Object.values(answers)
        .map(o => o.value)
        .join(', ')}. Final price: ₦${price.toLocaleString()}.`
    );


  /* ---- render ---- */
  return (
    <div className="pq-wrap">

      <div className="pq-video-box">
        <video
          ref={videoEl}
          className="pq-video"
          src={VIDEO_SRC}
          playsInline
          controls
          disablePictureInPicture
        />

        {modalVisible && qIdx < QUESTIONS.length && (
          <div className="pq-modal">
            <div className="pq-card">
              <p className="pq-q">{QUESTIONS[qIdx].text}</p>

              <div className="pq-opts">
                {QUESTIONS[qIdx].options.map(o => (
                  <button
                    key={o.value}
                    className="pq-btn"
                    onClick={() => choose(o)}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>


      {done && (
        <div className="pq-result">
          <h2 className="pq-result-h">Your Project Price</h2>
          <div className="pq-price">₦{price.toLocaleString()}</div>
          <div className="pq-words">{numToWords(price)}</div>
          <a className="pq-wa" href={waText} target="_blank" rel="noreferrer">
            Send via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}


/* -------------------- EXPORTS -------------------- */
export { ProjectPriceQuestion };
export default ProjectPriceQuestion;
