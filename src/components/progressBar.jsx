import { useRef, useState, useEffect } from "react";

function ProgressBar({ inView3, progressLimit, name }) {
  const [progress, setProgress] = useState(0);
  const afterMount = useRef(false);

  useEffect(() => {
    if (inView3) afterMount.current = true;
  }, [inView3]);

  useEffect(() => {
    if (afterMount.current) {
      let timer = setTimeout(() => {
        progress >= progressLimit
          ? clearTimeout(timer)
          : setProgress(progress + 1);
      }, 30);
    }
  }, [progress, inView3]);

  return (
    <div className="main-container w-full my-4 md:my-6">
      <div className="details flex justify-between font-ubuntu font-medium lg:text-lg">
        <span className="label block">{name}</span>
        <span className="progress block">{progress}%</span>
      </div>
      <div className="progress-container w-full h-3 rounded-full bg-slate-400">
        <div
          className="progress-bar h-full bg-green-700 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
