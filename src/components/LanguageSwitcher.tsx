"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Row, ToggleButton } from "@once-ui-system/core";
import styles from "./LanguageSwitcher.module.scss";

const localeConfig: Record<string, string> = {
  en: "EN",
  ja: "JA",
  zh: "ZH",
};

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setIsExpanded(false);
  }

  const otherLocales = Object.keys(localeConfig).filter((l) => l !== locale);

  return (
    <div className={styles.container} ref={containerRef}>
      <Row
        vertical="center"
        className={`${styles.toggleWrapper} ${isExpanded ? styles.expanded : ""}`}
        gap="4"
      >
        <ToggleButton
          label={localeConfig[locale]}
          onClick={() => setIsExpanded(!isExpanded)}
          selected={isExpanded}
          aria-label="Switch language"
        />
        <div className={styles.optionsWrapper}>
          {otherLocales.map((loc) => (
            <ToggleButton
              key={loc}
              label={localeConfig[loc]}
              onClick={() => switchLocale(loc)}
              selected={false}
              aria-label={`Switch to ${localeConfig[loc]}`}
            />
          ))}
        </div>
      </Row>
    </div>
  );
};
