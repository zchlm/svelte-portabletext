import type { Snippet } from 'svelte';
import type { MarkComponentProps } from '../rendererTypes';
type DefaultLinkProps = {
    portableText: MarkComponentProps;
    children?: Snippet;
};
declare const DefaultLink: import("svelte").Component<DefaultLinkProps, {}, "">;
type DefaultLink = ReturnType<typeof DefaultLink>;
export default DefaultLink;
