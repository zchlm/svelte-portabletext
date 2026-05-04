import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
type RenderCustomBlockProps = {
    global: GlobalProps;
    node: ArbitraryTypedObject;
    parentBlock?: PortableTextBlock;
    indexInParent: number;
    isInline?: boolean;
};
declare const RenderCustomBlock: import("svelte").Component<RenderCustomBlockProps, {}, "">;
type RenderCustomBlock = ReturnType<typeof RenderCustomBlock>;
export default RenderCustomBlock;
