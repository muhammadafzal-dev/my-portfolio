import { ImageResponse } from "next/og";

export const alt = "Muhammad Afzal — Full-Stack MERN Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #020617 0%, #0f766e 60%, #14b8a6 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "rgba(255,255,255,0.12)",
              border: "2px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            MA
          </div>
          <div style={{ fontSize: 28, opacity: 0.85, letterSpacing: 0.5 }}>
            muhammadafzal.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Muhammad Afzal
          </div>
          <div style={{ fontSize: 42, fontWeight: 500, color: "#bae6fd" }}>
            Full-Stack MERN Developer
          </div>
          <div style={{ fontSize: 28, opacity: 0.85, maxWidth: 900, lineHeight: 1.4 }}>
            3.5+ yrs building scalable web and cross-platform mobile apps with React, Next.js,
            React Native, Node.js and NestJS.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["React", "Next.js", "React Native", "Node.js", "NestJS", "TypeScript", "MongoDB"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontSize: 22,
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
