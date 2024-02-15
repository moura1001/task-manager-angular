export class Task {
  content: string = '';

  constructor(content: string) {
    this.content = content;
  }
}

export const tasks = new Map<string, Task>();
