import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Андрей Кочанов — разработка сайтов, веб-приложений и Telegram-сервисов";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(join(process.cwd(), "public/me-light.png"));
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;
  const services = [
    ["01", "Web sites", "From idea to launch"],
    ["02", "Telegram Mini Apps", "Bots · Integrations · Features"],
    ["03", "Custom web platforms", "Business logic · API · UX"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 92% 18%, rgba(122, 35, 255, .78) 0%, rgba(91, 18, 205, .46) 17%, transparent 42%), radial-gradient(circle at 82% 82%, rgba(92, 30, 255, .46) 0%, transparent 36%), linear-gradient(135deg, #0b0715 0%, #160d2b 42%, #241050 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(164,92,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(164,92,255,.22) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 66,
            top: 180,
            display: "flex",
            width: 230,
            height: 230,
            padding: 8,
            border: "2px solid rgba(174, 68, 255, .78)",
            borderRadius: "50%",
            background:
              "linear-gradient(145deg, rgba(174,68,255,.32), rgba(39,20,76,.92))",
            boxShadow:
              "0 0 42px rgba(164, 53, 255, .45), inset 0 0 24px rgba(255,255,255,.08)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            alt=""
            width="214"
            height="214"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: 340,
            top: 170,
            display: "flex",
            flexDirection: "column",
            width: 770,
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 22,
              color: "rgba(255,255,255,.75)",
              fontSize: 17,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Andrey Kochanov · Fullstack Developer
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 50,
              fontWeight: 700,
              lineHeight: 1.08,
            }}
          >
            <div style={{ display: "flex" }}>Building web solutions</div>
            <div
              style={{
                display: "flex",
                color: "#8f35ff",
              }}
            >
              for real business needs
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              color: "rgba(255,255,255,.72)",
              fontSize: 25,
            }}
          >
            React · TypeScript · Next.js · Node.js
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 340,
            right: 66,
            top: 392,
            display: "flex",
            gap: 22,
          }}
        >
          {services.map(([number, title, caption]) => (
            <div
              key={number}
              style={{
                display: "flex",
                flexDirection: "column",
                width: 240,
                height: 132,
                padding: "20px 20px 18px",
                border: "2px solid rgba(177, 52, 255, .9)",
                borderRadius: 18,
                background:
                  "linear-gradient(135deg, rgba(17,10,35,.9), rgba(32,16,68,.82))",
                boxShadow:
                  "0 0 28px rgba(145, 45, 255, .28), inset 0 0 18px rgba(255,255,255,.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  marginBottom: 18,
                  borderRadius: 8,
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: 700,
                  background: "linear-gradient(180deg, #8038ff, #bb00ff)",
                }}
              >
                {number}
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: 12,
                  color: "#ffffff",
                  fontSize: 24,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: "flex",
                  color: "rgba(255,255,255,.68)",
                  fontSize: 18,
                }}
              >
                {caption}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            left: 70,
            bottom: 48,
            display: "flex",
            color: "rgba(255,255,255,.5)",
            fontSize: 20,
          }}
        >
          kochanov-web.tech
        </div>
      </div>
    ),
    size,
  );
}
