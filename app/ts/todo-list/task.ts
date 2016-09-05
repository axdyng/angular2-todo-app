export class Task {
  id: number;
  title: string;
  status: boolean;

  constructor(id: number, title: string, status?: boolean) {
    this.id = id;
    this.title = title;
    this.status = status || false;
  }

  taskDone():void {
    this.status = true;
  }
}
