import GeneratingWords from './components/generating-words';
import CountDownTimer from './components/countdown-timer';
import RestartButton from './components/restart-button';
import useEngine from './hooks/useEngine';
import UserTypings from './components/user-typings';
import Results from './components/results';
import { calculateAccuracyPercentage } from './utils/helpers';
function App() {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();
  return (
    <div>
      <CountDownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratingWords key={words} words={words} />
        {/* User typed characters will be overlayed over the generated words */}
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </div>
  );
}
const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all">
      {children}
    </div>
  );
};

export default App;
