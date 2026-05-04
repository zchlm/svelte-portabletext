import type { ToolkitPortableTextList } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
import type { Snippet } from 'svelte';
type RenderListProps = {
    global: GlobalProps;
    indexInParent: number;
    node: ToolkitPortableTextList;
    children?: Snippet;
};
declare const RenderList: import("svelte").Component<RenderListProps, {}, "">;
type RenderList = ReturnType<typeof RenderList>;
export default RenderList;
