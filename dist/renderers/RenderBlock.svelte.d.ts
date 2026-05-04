import type { PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
import type { Snippet } from 'svelte';
type RenderBlockProps = {
    global: GlobalProps;
    node: PortableTextBlock;
    indexInParent: number;
    children?: Snippet;
};
declare const RenderBlock: import("svelte").Component<RenderBlockProps, {}, "">;
type RenderBlock = ReturnType<typeof RenderBlock>;
export default RenderBlock;
