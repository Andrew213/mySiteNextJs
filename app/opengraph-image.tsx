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
            "radial-gradient(circle at 82% 48%, #5c0be0 0%, #2a0a57 26%, transparent 48%), linear-gradient(135deg, #120824 0%, #1d0b38 55%, #120824 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.14,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.24) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.24) 1px, transparent 1px)",
            backgroundSize: "150px 150px",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 790,
            padding: "70px 0 70px 76px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 26,
              color: "#b692ff",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Андрей Кочанов · Fullstack-разработчик
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.13,
              letterSpacing: "-0.035em",
            }}
          >
            <div style={{ display: "flex" }}>Разрабатываю сайты,</div>
            <div style={{ display: "flex" }}>веб-приложения и</div>
            <div
              style={{
                display: "flex",
                color: "#a435ff",
              }}
            >
              Telegram-сервисы
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              color: "rgba(255,255,255,.76)",
              fontSize: 23,
            }}
          >
            React · TypeScript · Next.js · Node.js
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 62,
            top: 135,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 320,
            height: 320,
            border: "2px solid rgba(177,113,255,.48)",
            borderRadius: "50%",
            background: "rgba(92,11,224,.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 282,
              height: 282,
              overflow: "hidden",
              border: "9px solid rgba(101,30,255,.55)",
              borderRadius: "50%",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portraitSrc}
              alt=""
              width="282"
              height="282"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: -22,
              top: 72,
              display: "flex",
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "linear-gradient(180deg, #661eff, #a91eff)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -12,
              bottom: 36,
              display: "flex",
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "linear-gradient(180deg, #661eff, #a91eff)",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            right: 75,
            bottom: 42,
            display: "flex",
            color: "rgba(255,255,255,.58)",
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
