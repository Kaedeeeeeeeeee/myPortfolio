"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface SnowContextType {
    isSnowing: boolean;
    toggleSnow: () => void;
}

const SnowContext = createContext<SnowContextType | undefined>(undefined);

export const SnowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isSnowing, setIsSnowing] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("isSnowing");
        if (saved === "true") {
            setIsSnowing(true);
        }
    }, []);

    const toggleSnow = () => {
        setIsSnowing((prev) => {
            const newState = !prev;
            localStorage.setItem("isSnowing", String(newState));
            return newState;
        });
    };

    return (
        <SnowContext.Provider value={{ isSnowing, toggleSnow }}>
            {children}
        </SnowContext.Provider>
    );
};

export const useSnow = () => {
    const context = useContext(SnowContext);
    if (context === undefined) {
        throw new Error("useSnow must be used within a SnowProvider");
    }
    return context;
};
