import { randomUUID } from "crypto";

interface Taskprops {
  title: string;
  description?: string;
  done: boolean;
}

export class Task {
  private props: Taskprops;
  private readonly _id: string;

  constructor(props: Taskprops, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  get title(): string {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get done(): boolean {
    return this.props.done;
  }

  get id() {
    return this._id;
  }

  set title(newTitle: string) {
    if (!newTitle) throw new Error("Title cannot be empty!");
    this.props.title = newTitle;
  }

  set description(newDescription: string | undefined) {
    this.props.description = newDescription;
  }

  set done(done: boolean) {
    this.props.done = done;
  }
}
