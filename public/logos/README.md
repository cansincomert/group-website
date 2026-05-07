# Partner logos

Drop transparent-background PNGs here. The marquee on the home
page (`src/components/site/PartnerMarquee.tsx`) loads each file
by partner slug:

| File              | Partner          |
| ----------------- | ---------------- |
| `kuantek.png`     | Kuantek          |
| `intheca.png`     | Intheca          |
| `hayen.png`       | Hayen Teknoloji  |
| `utiligize.png`   | Utiligize        |
| `upu.png`         | Upu.io           |
| `ant.png`         | ANT Enerji       |
| `goktekin.png`    | Göktekin Enerji  |
| `inrag.png`       | INRAG            |
| `cozeka.png`      | CoZeka           |
| `sophgo.png`      | Sophgo           |
| `cleture.png`     | Cleture          |
| `enel.png`        | Enel Enerji      |

Recommended: PNG, transparent background, ~256×96 logical size,
white/light marks (the marquee sits on a dark `#011140`-ish
background). If a file is missing, the component falls back to
a textual chip with the partner name.
