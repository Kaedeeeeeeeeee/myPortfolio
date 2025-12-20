"use client";

import React from "react";
import { Avatar } from "@once-ui-system/core";
import { useSnow } from "@/components/SnowContext";
import styles from "./about.module.scss";
import snowStyles from "./snow.module.scss";

interface SnowyAvatarProps {
    src: string;
    size?: "xs" | "s" | "m" | "l" | "xl";
    className?: string;
}

export const SnowyAvatar: React.FC<SnowyAvatarProps> = ({ src, size = "xl", className }) => {
    const { isSnowing } = useSnow();

    return (
        <div className={snowStyles.snowWrapper}>
            <div className={`${snowStyles.santaHat} ${isSnowing ? snowStyles.visible : ''}`}>
                <div className={snowStyles.hatPomPom} />
                <div className={snowStyles.hatBody} />
                <div className={snowStyles.hatTrim} />
            </div>
            <Avatar 
                className={className} 
                src={src} 
                size={size} 
            />
        </div>
    );
};
