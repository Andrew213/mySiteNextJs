/* eslint-disable @typescript-eslint/no-explicit-any */
const ATTR_IDLING = "data-scramble-text-idling";
const ATTR_RUNNING = "data-scramble-text-running";

class ScrambleText {
  private _startTime: number;

  private _elapsedTime: number;

  private _running: boolean;

  private _idling: boolean;

  private _position: number;

  private _contents: { type: string; content: any }[];

  private _anim: (this: any) => void;

  private el: HTMLElement;

  private timeOffset: number;

  private fps: number;

  private chars: string[];

  private callback: () => void;

  constructor(
    el: HTMLElement,
    option: {
      timeOffset?: number;
      fps?: number;
      chars?: string[];
      callback?: () => void;
    } = {},
  ) {
    this._startTime = 0;
    this._elapsedTime = 0;
    this._running = false;
    this._idling = true;
    this._position = 0;
    this._contents = split(el.innerHTML);
    this._anim = anim.bind(this);

    this.el = el;
    this.timeOffset = option.timeOffset || 100;
    this.fps = option.fps || 60;
    this.chars = option.chars || [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "!",
      "#",
      "$",
      "%",
      "&",
      ":",
      ";",
      "?",
      "@",
      "[",
      "]",
      "^",
      "_",
      "{",
      "|",
      "}",
      "~",
    ];
    this.callback =
      typeof option.callback === "function" ? option.callback : () => {};
    this.play();
  }

  play() {
    if (this._running) return this;

    this._idling = true;
    this._running = true;
    this._position = 0;
    this.el.setAttribute(ATTR_IDLING, "");
    this.el.setAttribute(ATTR_RUNNING, "");
    this._anim();

    return this;
  }

  start() {
    this._idling = false;
    this._startTime = Date.now();
    this._elapsedTime = 0;
    this._position = 0;
    this.el.removeAttribute(ATTR_IDLING);

    return this;
  }

  stop() {
    this._running = false;
    this.el.removeAttribute(ATTR_IDLING);
    this.el.removeAttribute(ATTR_RUNNING);

    return this;
  }
}

function anim(this: any) {
  const elapsedTime = Date.now() - this._startTime;
  const deltaTime = elapsedTime - this._elapsedTime;
  const needsUpdate = 1000 / this.fps <= deltaTime;

  if (!needsUpdate) {
    requestAnimationFrame(this._anim);
    return;
  }

  this._elapsedTime = elapsedTime;

  this._position = this._idling ? 0 : (this._elapsedTime / this.timeOffset) | 0;

  if (!this._running) return;

  if (this._position >= this._contents.length) {
    this._running = false;
    this.el.innerHTML = this._contents
      .map((el: { content: any }) => el.content)
      .join("");
    this.el.removeAttribute("data-scramble-text-running");
    this.callback();
    return;
  }

  requestAnimationFrame(this._anim);

  const textArray = suffle(this._contents, this.chars, this._position);

  this.el.innerText = textArray.join("");
}

function suffle(contents: string | any[], chars: any, position: number) {
  const textArray = [];
  for (let i = 0, l = contents.length; i < l; i++) {
    if (contents[i].type === "tag") {
      textArray.push(contents[i].content);
      continue;
    }

    if (i < position) {
      textArray.push(contents[i].content);
      continue;
    }

    if (/\s/.test(contents[i].content)) {
      textArray.push(contents[i].content);
    }

    textArray.push(getRandCharacter(chars));
  }

  return textArray;
}

function getRandCharacter(chars: string | any[]) {
  const randNum = Math.floor(Math.random() * chars.length);
  const lowChoice = -0.5 + Math.random();
  const picketCharacter = chars[randNum];
  const choosen =
    lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
  return choosen;
}

function split(string: string) {
  const array = [];
  const tag = /^(\s*)?<\/?[a-z](.*?)>(\s*)?/i;
  const space = /^\s+/;
  let newString = string;
  newString = newString.replace(space, "").replace(/\s+$/, "");

  while (newString.length !== 0) {
    const matchTag = newString.match(tag);

    if (matchTag) {
      array.push({
        type: "tag",
        content: matchTag[0].replace(/^(\s*)(.+)(\s*)$/, "$1$2$3"),
      });
      newString = newString.replace(matchTag[0], "");
      continue;
    }

    const matchSpace = newString.match(space);

    if (matchSpace) {
      array.push({
        type: "space",
        content: " ",
      });
      newString = newString.replace(matchSpace[0], "");
      continue;
    }

    array.push({
      type: "character",
      content: newString[0],
    });
    newString = newString.slice(1);
  }

  return array;
}

export default ScrambleText;
