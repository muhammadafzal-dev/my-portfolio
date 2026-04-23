import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          background: "linear-gradient(135deg, #14b8a6, #0f766e)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: "12px",
        }}
      >
        MA
      </div>
    ),
    { ...size },
  );
}
