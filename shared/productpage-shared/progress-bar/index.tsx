import React, { useEffect } from 'react';

const ProgressBar = () => {

    useEffect(() => {
        // const progressBar = document.querySelector(".progress-bar");
        // const progress = document.querySelector<HTMLElement>(".progress");
        // let progressWidth = 0;
        // function updateProgress() {
        //   progressWidth += 10; // adjust based on your needs
        //   if (progress) {
        //     progress.style.width = `${progressWidth}%`;
        //   }
        // }
      }, []);
        

  return (
        <div className="progress-bar">
            <div className="progress"></div>
        </div>
  )
}

export default ProgressBar