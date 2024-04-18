import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "A Full Stack Developer",
                    "An IOS Developer",
                    "A Quantum Computing Researcher",
                    "A Tech Project Manager",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
