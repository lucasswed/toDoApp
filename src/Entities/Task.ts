interface Taskprops {
  title: string,
  description: string,
  done: boolean
}

export class Task {
  private props: Taskprops;
  constructor(props: Taskprops) {
    this.props = props;
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  get done(): boolean {
    return this.props.done;
  }
}