import type { Snippet } from 'svelte';
import type { MarkComponentProps } from '../rendererTypes';
type DefaultMarkProps = {
    portableText: MarkComponentProps;
    children?: Snippet;
};
declare const DefaultMark: import("svelte").Component<DefaultMarkProps, {}, "">;
type DefaultMark = ReturnType<typeof DefaultMark>;
export default DefaultMark;
