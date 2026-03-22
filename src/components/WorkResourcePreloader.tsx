"use client";

import { useEffect } from "react";

const WORK_RESOURCES = [
  // Videos
  "/videos/Practice.mp4",
  "/videos/ReviewAndAI.mp4",
  "/videos/Translation.mp4",
  "/videos/QuickOCR.mp4",
  // Images
  "/images/projects/my-gantt/myGantt1.jpg",
  "/images/projects/toeic-master/ToeicMaster_1.png",
];

function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.oncanplaythrough = () => resolve();
    video.onerror = () => reject();
    video.src = src;
    video.load();
  });
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = src;
  });
}

async function preloadResources() {
  for (const src of WORK_RESOURCES) {
    try {
      if (/\.(mp4|webm|ogg)$/i.test(src)) {
        await preloadVideo(src);
      } else {
        await preloadImage(src);
      }
    } catch {
      // Silently skip failed preloads
    }
  }
}

export function WorkResourcePreloader() {
  useEffect(() => {
    // Wait for current page to fully load, then preload during idle time
    if (typeof window === "undefined") return;

    const startPreload = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => preloadResources(), { timeout: 5000 });
      } else {
        setTimeout(preloadResources, 2000);
      }
    };

    if (document.readyState === "complete") {
      startPreload();
    } else {
      window.addEventListener("load", startPreload, { once: true });
      return () => window.removeEventListener("load", startPreload);
    }
  }, []);

  return null;
}
