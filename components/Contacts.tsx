"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const projectTypes = ["Сайт", "Web-приложение", "Telegram Mini App", "Другое"];

const telegramUser = "digital5irat";
const email = "a.kochanov31@yandex.ru";

export default function Contacts() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const selectedMessageRef = useRef<HTMLParagraphElement>(null);
  const telegramText = encodeURIComponent(
    `Здравствуйте! Хочу обсудить разработку: ${selectedType}.`,
  );
  const telegramUrl = `https://t.me/${telegramUser}?text=${telegramText}`;

  useEffect(() => {
    const section = sectionRef.current;
    const chat = chatRef.current;
    if (!section || !chat) return;

    const messages = chat.querySelectorAll("[data-contact-message]");
    const typingDots = chat.querySelectorAll("[data-contact-typing-dot]");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const timeline = gsap.timeline();
        timeline
          .fromTo(
            chat,
            { opacity: 0, y: 28, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out" },
          )
          .fromTo(
            messages,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.55,
            },
            "-=0.3",
          );

        gsap.to(typingDots, {
          y: -3,
          opacity: 1,
          duration: 0.55,
          ease: "power1.inOut",
          repeat: -1,
          stagger: {
            each: 0.14,
            repeat: -1,
            yoyo: true,
          },
        });

        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      gsap.killTweensOf([chat, ...messages, ...typingDots]);
    };
  }, []);

  useEffect(() => {
    if (!selectedMessageRef.current) return;

    gsap.fromTo(
      selectedMessageRef.current,
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
    );
  }, [selectedType]);

  return (
    <section
      ref={sectionRef}
      id="contacts"
      className="container inner max-phone:px-0"
    >
      <div className="relative overflow-hidden rounded-3xl border border-(--border) bg-portfolio-window px-10 py-12 backdrop-blur-[50px] max-tablet:px-7 max-tablet:py-8 max-phone:rounded-none max-phone:border-x-0 max-phone:px-5 max-phone:py-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-(image:--gradient-decor-bubble) opacity-20 blur-[70px]"
        />
        <div className="relative grid grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] items-center gap-12 max-tablet:grid-cols-1 max-tablet:gap-8">
          <div className="max-tablet:text-center">
            <p className="mb-3 font-comfortaa-semibold text-sm text-portfolio-link max-phone:text-xs">
              Заказать разработку
            </p>
            <h2 className="mb-5 max-w-[680px] font-comfortaa-semibold text-5xl leading-tight text-foreground max-tablet:mx-auto max-mobile:text-4xl max-phone:text-[34px]">
              Есть идея? Давайте обсудим.
            </h2>
            <p className="mb-7 max-w-[620px] text-base leading-[170%] text-foreground/75 max-tablet:mx-auto max-phone:text-sm max-phone:leading-[165%]">
              Расскажите о задаче в двух словах. Я уточню детали и предложу
              следующий шаг.
            </p>

            <div className="mb-8 flex flex-wrap gap-2 max-tablet:justify-center max-phone:grid max-phone:grid-cols-2">
              {projectTypes.map((projectType) => (
                <button
                  key={projectType}
                  className={cn(
                    "min-h-11 rounded-full border border-(--border) bg-portfolio-project px-4 py-2 text-sm text-foreground/85 transition-[background-color,border-color,color] duration-300 hover:bg-portfolio-window max-phone:flex max-phone:items-center max-phone:justify-center max-phone:px-3 max-phone:text-xs",
                    selectedType === projectType &&
                      "border-portfolio-normal bg-portfolio-normal text-white",
                  )}
                  type="button"
                  onClick={() => setSelectedType(projectType)}
                >
                  {projectType}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 max-tablet:justify-center max-phone:flex-col max-phone:gap-3">
              <a
                className="button flex items-center gap-3 !text-base !text-white max-phone:w-full max-phone:justify-center max-phone:py-3.5"
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span
                  aria-hidden="true"
                  className="h-6 w-6 bg-(image:--icon-tg) bg-contain bg-center bg-no-repeat"
                />
                Написать в Telegram
              </a>
              <a
                className="flex items-center gap-2 rounded-xl border border-(--border) bg-portfolio-project px-5 py-3 text-sm text-foreground transition-colors duration-300 hover:bg-portfolio-window max-phone:w-full max-phone:justify-center max-phone:px-3 max-phone:text-xs"
                href={`mailto:${email}`}
              >
                <span aria-hidden="true" className="text-lg">
                  @
                </span>
                {email}
              </a>
            </div>
          </div>

          <div
            ref={chatRef}
            className="relative min-h-[330px] rounded-2xl border border-(--border) bg-background/60 p-5 opacity-0 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl max-tablet:mx-auto max-tablet:w-full max-tablet:max-w-[680px] max-phone:min-h-[290px] max-phone:p-4"
          >
            <div className="mb-7 flex items-center gap-2 border-b border-(--border) pb-4 max-phone:mb-5 max-phone:pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-portfolio-normal" />
              <span className="h-2.5 w-2.5 rounded-full bg-portfolio-label" />
              <span className="h-2.5 w-2.5 rounded-full bg-portfolio-light-active" />
              <span className="ml-auto text-xs text-foreground/55">
                Новый проект
              </span>
            </div>

            <div className="space-y-3 text-sm leading-[150%] max-phone:text-xs max-phone:leading-[155%]">
              <p
                data-contact-message
                className="max-w-[86%] rounded-2xl rounded-bl-sm bg-portfolio-window px-4 py-3 text-foreground max-phone:px-3 max-phone:py-2.5"
              >
                Здравствуйте! Хочу обсудить разработку.
              </p>
              <p
                data-contact-message
                className="ml-auto max-w-[86%] rounded-2xl rounded-br-sm bg-portfolio-normal px-4 py-3 text-white max-phone:px-3 max-phone:py-2.5"
              >
                Отлично. Какой проект вы планируете запустить?
              </p>
              <p
                ref={selectedMessageRef}
                key={selectedType}
                data-contact-message
                className="max-w-[86%] rounded-2xl rounded-bl-sm bg-portfolio-window px-4 py-3 text-foreground max-phone:px-3 max-phone:py-2.5"
              >
                {selectedType}
              </p>
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-portfolio-window px-3 py-2 max-phone:bottom-4 max-phone:left-4">
              <span
                data-contact-typing-dot
                className="h-1.5 w-1.5 rounded-full bg-portfolio-link opacity-45"
              />
              <span
                data-contact-typing-dot
                className="h-1.5 w-1.5 rounded-full bg-portfolio-link opacity-45"
              />
              <span
                data-contact-typing-dot
                className="h-1.5 w-1.5 rounded-full bg-portfolio-link opacity-45"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
