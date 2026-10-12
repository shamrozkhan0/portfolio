import { ImageResponse } from "next/og";

export function ogCard(title: string, sub: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FAF7F2", color: "#1C1917", padding: 72 }}>
        <div style={{ display: "flex", width: 120, height: 14, background: "#C2562F" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 38, marginTop: 24, color: "#6B635B" }}>{sub}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#A8421F" }}>Shamroz Khan, AI Engineer</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
