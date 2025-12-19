"use client";

import React, { useEffect, useState } from "react";
import styles from "./SnowEffect.module.scss";

const SNOWFLAKE_CHARS = ["❄", "❅", "❆"];

export const SnowEffect: React.FC<{ isEnabled: boolean }> = ({ isEnabled }) => {
    const [flakes, setFlakes] = useState<
        {
            id: number;
            left: string;
            delay: string;
            duration: string;
            size: string;
            opacity: number;
            character: string;
        }[]
    >([]);

    useEffect(() => {
        if (isEnabled) {
            const newFlakes = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 5}s`,
                duration: `${Math.random() * 10 + 10}s`, // Slower fall for more grace
                size: `${Math.random() * 1 + 0.8}rem`, // Larger relative size for text
                opacity: Math.random() * 0.6 + 0.4,
                character: SNOWFLAKE_CHARS[Math.floor(Math.random() * SNOWFLAKE_CHARS.length)],
            }));
            setFlakes(newFlakes);
        } else {
            setFlakes([]);
        }
    }, [isEnabled]);

    if (!isEnabled) return null;

    return (
        <div className={styles.snowContainer} aria-hidden="true">
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className={styles.snowflake}
                    style={{
                        left: flake.left,
                        animationDelay: flake.delay,
                        animationDuration: flake.duration,
                        fontSize: flake.size,
                        opacity: flake.opacity,
                    }}
                >
                    {flake.character}
                </div>
            ))}
        </div>
    );
};
