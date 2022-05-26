import { capitalize, forEach, random, sampleSize, shuffle } from 'lodash';
import { useState } from 'react';
import { words } from '~/shared/data';

export default function RandomPassage() {
  const [passage, setPassage] = useState('');

  const randomPassage = () => {
    const numParagraph = 1;
    const wordsInSetence = [5, 12];

    let result = '';
    forEach(Array(numParagraph), () => {
      const numSetences = random(7, 15);
      forEach(Array(numSetences), () => {
        const numWords = random(wordsInSetence[0], wordsInSetence[1]);
        let sampleWords = sampleSize(words, numWords);
        if (random(0, 5) === 1) sampleWords = shuffle([',', ...sampleWords]);
        const setence = capitalize(sampleWords.join(' '));
        result += setence + '. ';
      });
    });

    setPassage(result);
  };

  return (
    <>
      <p>{passage} </p>
      <button
        className='bg-blue-500 p-3 rounded text-white'
        onClick={randomPassage}
      >
        Random
      </button>
    </>
  );
}
