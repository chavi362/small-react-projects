import React, { useState, useEffect } from 'react';
import "./Clock.scss"
import Clock from './Clock';
const Clocks7 = () => {
    const [clocks, setClocks] = useState([
        { city: 'NYC', time: new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }), updateInterval: 1 },
        { city: 'LON', time: new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/London' }), updateInterval: 1 },
        { city: 'JLM', time: new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem' }), updateInterval: 1 },
    ]);

    const updateClock = (index) => {
        const newClocks = [...clocks];
        newClocks[index].time = new Date().toLocaleTimeString('en-US', { timeZone: getTimezone(index) });
        setClocks(newClocks);
    };

    const resetAllIntervals = () => {
        setClocks(clocks.map(clock => ({ ...clock, updateInterval: 1 })));
    };

    const doubleAllIntervals = () => {
        setClocks(clocks.map(clock => ({ ...clock, updateInterval: clock.updateInterval * 2 })));
    };

    const randomizeAllIntervals = () => {
        setClocks(clocks.map(clock => ({ ...clock, updateInterval: Math.random() * 5 })));
    };

    const resetMyInterval = (index) => {
        const newClocks = [...clocks];
        newClocks[index].updateInterval = 1;
        setClocks(newClocks);
    };

    const doubleMyInterval = (index) => {
        const newClocks = [...clocks];
        newClocks[index].updateInterval *= 2;
        setClocks(newClocks);
    };

    useEffect(() => {
        const intervalIds = clocks.map((clock, index) => {
            return setInterval(() => {
                updateClock(index);
            }, clock.updateInterval * 1000);
        });

        return () => {
            intervalIds.forEach(clearInterval);
        };
    }, [clocks]);

    const getTimezone = (index) => {
        return {
            0: 'America/New_York',
            1: 'Europe/London',
            2: 'Asia/Jerusalem',
        }[index];
    };

    return (
        <div>
            <h1>Clocks All</h1>
            {clocks.map((clock, index) => (
                <div key={index}>
                    <p>{clock.city}</p>
                    <Clock time={clock.time}></Clock>
                    <button onClick={() => resetMyInterval(index)}>Reset My Interval</button>
                    <button onClick={() => doubleMyInterval(index)}>Double My Interval</button>
                    <button onClick={() => updateClock(index)}>Update Me Now</button>
                </div>
            ))}
            <div>
                <button onClick={resetAllIntervals}>Reset All Intervals</button>
                <button onClick={doubleAllIntervals}>Double All Intervals</button>
                <button onClick={randomizeAllIntervals}>Randomize All Intervals</button>
            </div>
        </div>
    );
}

export default Clocks7
