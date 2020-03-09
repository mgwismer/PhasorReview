import React from 'react';
import { IContext } from '.';
import { Consumer } from './Context';

export interface IProps {
  inline?: boolean;
  children: string;
  onRender?: (...args: any[]) => any;
}

const types = {
  ascii: 'asciimath',
  tex: 'tex'
};

class Node extends React.Component<IProps & { context: IContext }> {

  public static contextType: React.Context<IContext>;

  public static defaultProps = {
    inline: false,
    onRender: () => ({}),
  };

  public script!: HTMLScriptElement;

  // constructor(props) {
  //   super(props);
  //   this.script = null;
  // }
  /**
   * Render the math once the node is mounted
   */
  public componentDidMount() {
    this.typeset();
  }

  /**
   * Update the jax, force update if the display mode changed
   */
  public componentDidUpdate(prevProps: any) {
    const forceUpdate = prevProps.inline !== this.props.inline || prevProps.children !== this.props.children;
    this.typeset(forceUpdate);
  }

  /**
   * Prevent update when the source has not changed
   */
  public shouldComponentUpdate(nextProps: any) {
    return (
      nextProps.children !== this.props.children ||
      nextProps.inline !== this.props.inline
    );
  }

  /**
   * Clear the math when unmounting the node
   */
  public componentWillUnmount() {
    this.clear();
  }

  /**
   * Clear the jax
   */
  public clear() {
    const { MathJax } = this.props.context;

    if (!this.script) {
      return;
    }

    const jax = MathJax.Hub.getJaxFor(this.script);

    if (jax) {
      jax.Remove();
    }
  }

  /**
   * Update math in the node
   * @param { Boolean } forceUpdate
   */
  public typeset(forceUpdate?: boolean) {
    const { MathJax } = this.props.context;

    if (!MathJax) {
      throw Error('Could not find MathJax while attempting typeset! Probably MathJax script hasn\'t been loaded or MathJax.Context is not in the hierarchy');
    }

    const text = this.props.children;

    if (forceUpdate) {
      this.clear();
    }

    if (forceUpdate || !this.script) {
      this.setScriptText(text);
    }

    MathJax.Hub.Queue(
      MathJax.Hub.Reprocess(this.script, this.props.onRender)
    );
  }

  /**
   * Create a script
   * @param { String } text
   */
  public setScriptText(text: string) {
    const inline = this.props.inline;
    // const type = types[this.context.input];
    const type = 'asciimath';
    if (!this.script) {
      this.script = document.createElement('script');
      this.script.type = `math/${type}; ${inline ? '' : 'mode=display'}`;
      this.span.current!.appendChild(this.script);
    }

    this.script.text = text;
  }

  public render() {
    return <span ref={this.span}/>;
  }

  private span = React.createRef<HTMLSpanElement>();
}

export default (props: IProps) => (
  <Consumer>
    {context => (<Node {...props} context={context} />)}
  </Consumer>
);
