/**
 * Scene data for the scroll-scrub hero journey.
 *
 * Hero concept: four surreal, living images (each animated from a still —
 * a bubblegum-blowing marble bust, a smoke-headed figure, a giant cherry
 * towering over a street, a hand sliding away from a statue's eyes...) are
 * grouped into four chapters, one per manifesto phrase. Within each chapter
 * the source clips crossfade into one another so the images feel alive and
 * in motion throughout; the phrase for that chapter crossfades in as its
 * own DOM overlay, synced to scroll via the scroll-scrub engine.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#FF3EA5",
  background: "#0A0A0A",
  ink: "#FFFFFF",
  muted: "rgba(255,255,255,0.72)",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "criatividade",
    label: "Criatividade",
    kicker: "SHOWREEL IMPAKTA",
    title: "SOMOS A CRIATIVIDADE.",
    body: "Vemos o mundo de um ângulo diferente e transformamos isso em ideias que mais ninguém teria.",
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    poster: "/assets/world/scene-01-poster.png",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    align: "left",
  },
  {
    id: "loucura",
    label: "Loucura",
    kicker: "QUEM SOMOS",
    title: "SOMOS A LOUCURA.",
    body: "Arriscamos, explodimos convenções e não temos medo de ser demasiado.",
    clip: "/assets/world/scene-02.mp4",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    poster: "/assets/world/scene-02-poster.png",
    mobilePoster: "/assets/world/scene-02-mobile-poster.png",
    align: "right",
  },
  {
    id: "transformacao",
    label: "Transformação",
    kicker: "O QUE FAZEMOS",
    title: "SOMOS A TRANSFORMAÇÃO.",
    body: "Pegamos no comum e tornamo-lo extraordinário, à escala da tua marca.",
    clip: "/assets/world/scene-03.mp4",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    poster: "/assets/world/scene-03-poster.png",
    mobilePoster: "/assets/world/scene-03-mobile-poster.png",
    align: "left",
  },
  {
    id: "impakta",
    label: "IMPAKTA",
    kicker: "PORQUÊ IMPAKTA",
    title: "SOMOS A IMPAKTA.",
    body: "Estratégia, criatividade, tecnologia e execução — prontos para o teu próximo passo.",
    clip: "/assets/world/scene-04.mp4",
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    poster: "/assets/world/scene-04-poster.png",
    mobilePoster: "/assets/world/scene-04-mobile-poster.png",
    align: "right",
  },
];
