import type { ToolkitTextNode } from '@portabletext/toolkit';
import type { GlobalProps } from '../rendererTypes';
type RenderTextProps = {
    global: GlobalProps;
    node: ToolkitTextNode;
};
declare const RenderText: import("svelte").Component<RenderTextProps, {}, "">;
type RenderText = ReturnType<typeof RenderText>;
export default RenderText;
