import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Link-preview card (WhatsApp, LinkedIn, X...). Ported from the live
 * zerobusy.com, recoloured to this site's palette. Tagline is the one Tanay
 * picked for the live preview.
 */
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";
export const ogImageAlt = "ZeroBusy — Automate the busy, focus on what matters";

const PRIMARY = "#0080ff";
const SECONDARY = "#00c2ff";
const NAVY = "#09131d";

export async function renderOgImage() {
  // The renderer's built-in font has no italic face, so `fontStyle: "italic"`
  // silently renders upright unless we supply one. Once any custom font is
  // loaded it becomes the default, so the upright wordmark needs its own too.
  // Both are Inter (SIL OFL).
  const [italic, bold] = await Promise.all([
    readFile(join(process.cwd(), "lib/fonts/Inter-MediumItalic.ttf")),
    readFile(join(process.cwd(), "lib/fonts/Inter-ExtraBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: NAVY,
          backgroundImage: `radial-gradient(circle at 22% 25%, ${PRIMARY}33 0%, transparent 45%), radial-gradient(circle at 78% 75%, ${SECONDARY}33 0%, transparent 45%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* Clock mark, matching components/landing/Logo.tsx */}
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: "50%",
              border: `8px solid ${PRIMARY}`,
              display: "flex",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 8,
                height: 36,
                borderRadius: 4,
                background: PRIMARY,
                top: 16,
                left: "50%",
                marginLeft: -4,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 8,
                height: 26,
                borderRadius: 4,
                background: SECONDARY,
                top: 30,
                left: "54%",
                marginLeft: -4,
                transform: "rotate(70deg)",
                transformOrigin: "bottom center",
              }}
            />
          </div>
          <div style={{ display: "flex", fontFamily: "Inter", fontSize: 104, fontWeight: 800, color: "#FFFFFF", letterSpacing: -2 }}>
            ZER
            <span style={{ color: PRIMARY }}>0</span>
            BUSY
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontFamily: "Inter Italic",
            fontSize: 34,
            fontWeight: 500,
            fontStyle: "italic",
            color: "#CBD5E1",
          }}
        >
          Automate the Busy, focus on what matters
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Inter", data: bold, style: "normal", weight: 800 },
        { name: "Inter Italic", data: italic, style: "italic", weight: 500 },
      ],
    },
  );
}
