"use client";

import React, { useEffect, useState } from "react";
import styles from "./SnowEffect.module.scss";

export const SnowEffect: React.FC<{ isEnabled: boolean }> = ({ isEnabled }) => {
    const [flakes, setFlakes] = useState<{ id: number; left: string; delay: string; duration: string; size: string; opacity: number }[]>([]);

    useEffect(() => {
        if (isEnabled) {
            const newFlakes = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 5}s`,
                duration: `${Math.random() * 5 + 5}s`,
                size: `${Math.random() * 4 + 2}px`,
                opacity: Math.random() * 0.7 + 0.3,
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
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity,
                    }}
                />
            ))}
        </div>
    );
};
