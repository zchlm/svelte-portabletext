import type { ToolkitNestedPortableTextSpan } from '@portabletext/toolkit';
import type { PortableTextBlock } from '@portabletext/types';
import type { GlobalProps } from '../rendererTypes';
import type { Snippet } from 'svelte';
type RenderSpanProps = {
    global: GlobalProps;
    node: ToolkitNestedPortableTextSpan;
    parentBlock?: PortableTextBlock;
    children?: Snippet;
};
declare const RenderSpan: import("svelte").Component<RenderSpanProps, {}, "">;
type RenderSpan = ReturnType<typeof RenderSpan>;
export default RenderSpan;
