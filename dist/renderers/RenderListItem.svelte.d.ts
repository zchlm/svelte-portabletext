import type { ToolkitPortableTextListItem } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
import type { Snippet } from 'svelte';
type Props = {
    global: GlobalProps;
    indexInParent: number;
    node: ToolkitPortableTextListItem;
    children?: Snippet;
};
declare const RenderListItem: import("svelte").Component<Props, {}, "">;
type RenderListItem = ReturnType<typeof RenderListItem>;
export default RenderListItem;
