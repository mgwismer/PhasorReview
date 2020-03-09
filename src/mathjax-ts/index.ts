import Context from './Context';
import Node from './Node';
import Text from './Text';

export { Node, Context, Text };
export default { Node, Context, Text };

export type MathJaxUnknown = any;
export const MathJax: MathJaxUnknown = {};

export interface IContext {
    MathJax: MathJaxUnknown;
    input: Input;
}

export type Input = 'ascii' | 'tex';
