import Image from "next/image";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Andrew213",
    iconClass: "bg-[image:var(--icon-git)]",
  },
  {
    label: "Telegram",
    href: "https://t.me/andreikochanov",
    iconClass: "bg-[image:var(--icon-tg)]",
  },
  {
    label: "Kwork",
    href: "https://kwork.ru/user/kochanov-web",
    iconClass: "bg-[image:url('/kwork.png')] bg-contain bg-center",
  },
];

function DesktopDecor() {
  return (
    <div className="relative mr-[30px] h-80 w-80 [display:none] max-tablet:ml-[-180px] max-tablet:[display:block] max-mobile:[display:none]">
      <div className="absolute right-[-30px] top-[-30px] h-[270px] w-[400px] rounded-[29px] bg-portfolio-window">
        <div className="flex justify-end border-b border-white/30 p-[30px] opacity-30">
          <span className="relative mr-[50px] block h-5 w-5 rounded-full bg-foreground before:absolute before:right-[30px] before:h-5 before:w-5 before:rounded-full before:bg-foreground before:content-[''] after:absolute after:right-[-30px] after:h-5 after:w-5 after:rounded-full after:bg-foreground after:content-['']" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-[270px] w-[400px] rounded-[29px] bg-portfolio-window">
        <div className="flex justify-end border-b border-white/30 p-[30px]">
          <span className="relative mr-[50px] block h-5 w-5 rounded-full bg-foreground before:absolute before:right-[30px] before:h-5 before:w-5 before:rounded-full before:bg-foreground before:content-[''] after:absolute after:right-[-30px] after:h-5 after:w-5 after:rounded-full after:bg-foreground after:content-['']" />
        </div>
        <Image
          className="absolute bottom-20 right-[50px] max-[765px]:hidden"
          src="/desctopDecor.svg"
          alt=""
          width={206}
          height={92}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-1">
      <div className="container relative flex min-h-0 flex-1 flex-col pt-[52px] text-foreground max-menu:pt-0 max-menu:mt-[-70px] max-small:pb-[calc(50px+env(safe-area-inset-bottom,0px))]">
        <div className="mt-auto flex items-center justify-between gap-10 max-mobile:mt-auto max-mobile:justify-center max-phone:absolute max-phone:left-1/2 max-phone:top-1/2 max-phone:mt-0 max-phone:w-full max-phone:-translate-x-1/2 max-phone:-translate-y-1/2">
          <div className="max-mobile:text-center">
            <h1 className="max-w-[533px] font-comfortaa-bold text-[72px] leading-tight max-mobile:block max-mobile:text-center max-[450px]:text-[50px]">
              <span className="block bg-[image:var(--gradient-text)] bg-clip-text text-center text-transparent">
                Andrey
              </span>{" "}
              Kochanov
            </h1>
            <p className="mt-2 text-xl max-mobile:text-base text-center font-bold">
              <span className="mr-2 bg-[image:var(--gradient-text)] bg-clip-text text-3xl text-transparent max-mobile:mr-0">
                Web developer.
              </span>
            </p>
          </div>

          <div className="relative mr-[83px] h-80 w-80 shrink-0 before:absolute before:left-1/2 before:top-1/2 before:-z-[1] before:h-87.5 before:w-87.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-(--bubble-dark) before:opacity-20 before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:h-95 after:w-95 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-(--bubble-dark) after:opacity-20 after:content-[''] max-tablet:hidden">
            <Image
              className="h-full w-full object-contain"
              src="/me-light.png"
              alt="Andrey Kochanov"
              width={320}
              height={320}
              priority
            />
            <div className="absolute right-0 before:absolute before:-left-[88px] before:-top-[117px] before:-z-[1] before:h-[111px] before:w-[111px] before:bg-[image:var(--hero-decor-2)] before:content-[''] after:absolute after:-left-[63px] after:-top-[301px] after:-z-[1] after:h-[111px] after:w-[111px] after:bg-[image:var(--hero-decor-1)] after:bg-no-repeat after:content-['']" />
            <div className="absolute left-[-5px] top-10 h-[54px] w-[54px] rounded-full bg-[image:var(--gradient-decor-bubble)] after:absolute after:left-[-10px] after:top-[57px] after:h-[22px] after:w-[22px] after:rounded-full after:bg-[image:var(--gradient-decor-bubble)] after:content-['']" />
            <div className="absolute right-[-80px] top-[100px] h-[54px] w-[54px] rounded-full bg-[image:var(--gradient-decor-bubble)] after:absolute after:left-[34px] after:top-[-28px] after:h-[22px] after:w-[22px] after:rounded-full after:bg-[image:var(--gradient-decor-bubble)] after:content-['']" />
          </div>

          <DesktopDecor />
        </div>

        <div className="mt-auto mb-[50px] flex justify-between pl-5 max-tablet:pl-0 max-[680px]:mb-[34px] max-phone:mb-10 max-phone:flex-col max-phone:items-center max-phone:justify-center">
          <div className="flex w-[150px] items-center justify-between max-phone:hidden">
            <a
              data-scroll-to="footer"
              aria-label="Scroll to footer"
              className="relative mb-[3px] block h-[42px] w-[42px] rounded-full bg-[image:var(--icon-scroll),var(--gradient-decor-bubble)] bg-center bg-no-repeat before:absolute before:left-1/2 before:top-1/2 before:-z-[1] before:h-[62px] before:w-[62px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[var(--bubble-dark)] before:opacity-20 before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-z-[1] after:h-[76px] after:w-[76px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[var(--bubble-dark)] after:opacity-20 after:content-['']"
            />
            <span className="block w-20 font-comfortaa-bold text-[10px]">
              SCROLL TO DOWN
            </span>
          </div>

          <a
            href="mailto:a.kochanov31@yandex.ru"
            className="button z-10 mb-[30px] [display:none] !text-white max-phone:[display:block]"
          >
            <span>Связаться</span>
          </a>

          <ul className="flex gap-[50px]">
            {socialLinks.map((link) => (
              <li
                key={link.href}
                className="relative z-[1] h-[42px] w-[42px] before:absolute before:left-1/2 before:top-1/2 before:-z-[1] before:h-[62px] before:w-[62px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[var(--bubble-dark)] before:opacity-10 before:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] before:content-['']"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className={`absolute z-[6] block h-[42px] w-[42px] bg-no-repeat ${link.iconClass}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
