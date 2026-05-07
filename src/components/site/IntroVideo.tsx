import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Play, Pause } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const POSTER_SRC = "/videos/intro-poster.jpg";
const MP4_SRC = "/videos/intro.mp4";
const WEBM_SRC = "/videos/intro.webm";

export const IntroVideo = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setUnavailable(true));
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="container py-16 md:py-24">
      <SectionHeader
        eyebrow={t("home.videoEyebrow")}
        title={
          <>
            {t("home.videoTitleA")}{" "}
            <span className="text-gradient">
              {t("home.videoTitleHighlight")}
            </span>
          </>
        }
        subtitle={t("home.videoSubtitle")}
      />

      <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        <div className="relative aspect-video w-full bg-[#020a26]">
          <video
            ref={ref}
            className="h-full w-full object-cover"
            poster={POSTER_SRC}
            preload="metadata"
            playsInline
            controls={playing}
            onEnded={() => setPlaying(false)}
            onError={() => setUnavailable(true)}
          >
            <source src={WEBM_SRC} type="video/webm" />
            <source src={MP4_SRC} type="video/mp4" />
          </video>

          {!playing && (
            <button
              type="button"
              onClick={toggle}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-[#020a26]/40 to-[#020a26]/80 transition-colors hover:via-[#020a26]/30"
              aria-label={t("home.videoPlay")}
            >
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow ring-1 ring-white/30 transition-transform hover:scale-105">
                <Play className="ml-1 h-8 w-8" />
              </span>
            </button>
          )}

          {playing && (
            <button
              type="button"
              onClick={toggle}
              className="absolute right-4 top-4 inline-flex h-9 items-center gap-1 rounded-full bg-black/50 px-3 text-xs font-medium text-white backdrop-blur"
              aria-label={t("home.videoPause")}
            >
              <Pause className="h-3.5 w-3.5" /> {t("home.videoPause")}
            </button>
          )}

          {unavailable && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020a26] to-transparent px-6 py-5">
              <div className="text-xs uppercase tracking-[0.22em] text-primary">
                {t("home.videoPlaceholderTag")}
              </div>
              <div className="mt-1 text-sm text-slate-200">
                {t("home.videoPlaceholderBody")}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
