import React, {useState, useEffect} from "react";

const SecondsCounter = () => {

    const [sec, setSec] = useState(0);
    const [fromattedSec, setfromattedSec] = useState(["0", "0", "0", "0"]);
    const [isRunning, setIsRunning] = useState(true);

    const isRunningHandler = () => {
        setIsRunning((prev) => !prev)
    };

    const restartHandler = () => {
        setSec(0);
    };
    
    useEffect(() => {

        let interval;
        
        if (isRunning) {
            interval = setInterval(() => {
                setSec(prev => prev + 1);
            }, 1000) ;  
        }

        return () => {clearInterval(interval)}; 
    }, [isRunning]);


    useEffect(() =>  {
            setfromattedSec(sec.toString().padStart(4, "0").split(""));
    }, [sec]);

 
    return (

        <div className="bg-black container-fluid row py-3">
            <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="flip-counter m-auto">
                    <div id="clock" className="digit"><i className="fa-regular fa-clock"></i></div>
                    <div className="digit">{fromattedSec[0]}</div>
                    <div className="digit">{fromattedSec[1]}</div>
                    <div className="digit">{fromattedSec[2]}</div>
                    <div className="digit">{fromattedSec[3]}</div>
                </div>
            </div>
            <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                <button onClick={isRunningHandler} className="btn btn-primary mx-1">
                    {isRunning === false ? 'Start' : 'Stop'}
                </button>
                <button onClick={restartHandler} className="btn btn-danger mx-1">
                    Re-start
                </button>
            </div>
        </div>
    );
}

export default SecondsCounter;