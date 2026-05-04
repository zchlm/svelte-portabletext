import type { Snippet } from 'svelte';
import type { BlockComponentProps } from '../rendererTypes';
type DefaultBlockProps = {
    portableText: BlockComponentProps;
    children?: Snippet;
};
declare const DefaultBlock: import("svelte").Component<DefaultBlockProps, {}, "">;
type DefaultBlock = ReturnType<typeof DefaultBlock>;
export default DefaultBlock;
