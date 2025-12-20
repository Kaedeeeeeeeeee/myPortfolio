"use client";

import React from "react";
import { Heading } from "@once-ui-system/core";
import { useSnow } from "@/components/SnowContext";
import snowStyles from "./snow.module.scss";

interface SnowyNameProps {
    name: string;
    className?: string; // To accept styles.textAlign
}

export const SnowyName: React.FC<SnowyNameProps> = ({ name, className }) => {
    const { isSnowing } = useSnow();

    return (
        <div className={snowStyles.snowTextWrapper}>
             <div className={`${snowStyles.snowTextCap} ${isSnowing ? snowStyles.visible : ''}`} />
            <Heading className={className} variant="display-strong-xl">
                {name}
            </Heading>
        </div>
    );
};
