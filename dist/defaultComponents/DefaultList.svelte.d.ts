import type { Snippet } from 'svelte';
import type { ListComponentProps } from '../rendererTypes';
type DefaultListProps = {
    portableText: ListComponentProps;
    children?: Snippet;
};
declare const DefaultList: import("svelte").Component<DefaultListProps, {}, "">;
type DefaultList = ReturnType<typeof DefaultList>;
export default DefaultList;
