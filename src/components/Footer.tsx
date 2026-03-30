"use client";

import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Footer.module.scss";

const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Kaedeeeeeeeeee",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:f.shera.09@gmail.com",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">Zhang Shifeng</Text>
          <Text onBackground="neutral-weak">
            / {t("buildWith")}{" "}
            <SmartLink href="https://once-ui.com/products/magic-portfolio">Once UI</SmartLink>
          </Text>
        </Text>
        <Row gap="16">
          {socialLinks.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
