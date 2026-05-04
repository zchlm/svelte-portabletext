import RenderNode from './RenderNode.svelte';
import type { PortableTextBlock } from '@portabletext/types';
import type { GenericNode } from './ptTypes';
import type { GlobalProps } from './rendererTypes';
type RenderNodeProps = {
    global: GlobalProps;
    options: {
        indexInParent: number;
        node: GenericNode;
        parentBlock?: PortableTextBlock;
        isInline?: boolean;
    };
};
declare const RenderNode: import("svelte").Component<RenderNodeProps, {}, "">;
type RenderNode = ReturnType<typeof RenderNode>;
export default RenderNode;
