export class Task {
  title: string;
  checked: boolean;

  constructor(title: string, checked?: boolean) {
    this.title = title;
    this.checked = checked || false;
  }

  taskChecked():void {
    this.checked = true;
  }
}
