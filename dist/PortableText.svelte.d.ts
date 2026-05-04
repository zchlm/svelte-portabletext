import type { InputValue, PortableTextSvelteContext } from './ptTypes';
import type { MissingComponentHandler, PortableTextComponents } from './rendererTypes';
type PortableTextProps = {
    value?: InputValue;
    /**
     * Svelte components used to render portable text.
     * This is an object with user-defined components merged with native ones.
     */
    components?: PortableTextComponents;
    /**
     * User-defined data context, as passed to the `<PortableText>` component.
     */
    context?: PortableTextSvelteContext;
    /**
     * Function to call when encountering unknown unknown types, eg blocks, marks,
     * block style, list styles without an associated Svelte component.
     *
     * Will print a warning message to the console by default.
     * Pass `false` to disable.
     */
    onMissingComponent?: MissingComponentHandler | boolean;
};
declare const PortableText: import("svelte").Component<PortableTextProps, {}, "">;
type PortableText = ReturnType<typeof PortableText>;
export default PortableText;
