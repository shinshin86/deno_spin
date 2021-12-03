const spinnerType = {
  box1: "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏",
  box2: "⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓",
  box3: "⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆",
  box4: "⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋",
  box5: "⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁",
  box6: "⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈",
  box7: "⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈",
  spin1: "|/-\\",
  spin2: "◴◷◶◵",
  spin3: "◰◳◲◱",
  spin4: "◐◓◑◒",
  spin5: "▉▊▋▌▍▎▏▎▍▌▋▊▉",
  spin6: "▌▄▐▀",
  spin7: "╫╪",
  spin8: "■□▪▫",
  spin9: "←↑→↓",
};

const sleep = (msec: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, msec));

type SpinnerType = keyof typeof spinnerType;

export default class Spinner {
  type: SpinnerType = "box1";
  drawInterval: number = 50;
  #frames: Array<string> = spinnerType[this.type].split("");
  #length: number = this.#frames.length;
  #pos: number = 0;

  constructor(props?: Partial<Spinner>) {
    if (props?.type) {
      this.#frames = spinnerType[props.type].split("");
    }

    if (props?.drawInterval) {
      this.drawInterval = props.drawInterval;
    }
  }

  private getCurrentSpin(): string {
    return this.#frames[this.#pos % this.#length];
  }

  private getNextSpin(): string {
    const char = this.#frames[this.#pos % this.#length];
    this.#pos++;
    return char;
  }

  public async current(): Promise<void> {
    const spinnerText = new TextEncoder().encode(this.getCurrentSpin());
    Deno.writeAllSync(Deno.stdout, spinnerText);
    await sleep(this.drawInterval);
    const clear = new TextEncoder().encode("\r");
    Deno.writeAllSync(Deno.stdout, clear);
  }

  public async next(): Promise<void> {
    const spinnerText = new TextEncoder().encode(this.getNextSpin());
    Deno.writeAllSync(Deno.stdout, spinnerText);
    await sleep(this.drawInterval);
    const clear = new TextEncoder().encode("\r");
    Deno.writeAllSync(Deno.stdout, clear);
  }

  public reset(): void {
    this.#pos = 0;
  }
}
