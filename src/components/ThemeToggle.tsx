"use client";

import React, { useEffect, useState, useRef } from "react";
import { Row, ToggleButton, useTheme, IconButton } from "@once-ui-system/core";
import { useSnow } from "./SnowContext";
import styles from "./ThemeToggle.module.scss";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { isSnowing, toggleSnow } = useSnow();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, [theme]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const mainIcon = currentTheme === "dark" ? "dark" : "light";

  return (
    <div className={styles.container} ref={containerRef}>
      <Row
        vertical="center"
        className={`${styles.toggleWrapper} ${isExpanded ? styles.expanded : ""}`}
        gap="4"
      >
        {/* Main Trigger Button */}
        <ToggleButton
          prefixIcon={mainIcon}
          onClick={() => setIsExpanded(!isExpanded)}
          selected={isExpanded}
          aria-label="Toggle settings"
        />

        {/* Expanded Options */}
        <div className={styles.optionsWrapper}>
          <ToggleButton
            prefixIcon="light"
            onClick={() => {
              setTheme("light");
              // setIsExpanded(false);
            }}
            selected={currentTheme === "light"}
            aria-label="Switch to light mode"
          />
          <ToggleButton
            prefixIcon="dark"
            onClick={() => {
              setTheme("dark");
              // setIsExpanded(false);
            }}
            selected={currentTheme === "dark"}
            aria-label="Switch to dark mode"
          />
          <ToggleButton
            prefixIcon="snow"
            onClick={toggleSnow}
            selected={isSnowing}
            aria-label="Toggle snow effect"
          />
        </div>
      </Row>
    </div>
  );
};
