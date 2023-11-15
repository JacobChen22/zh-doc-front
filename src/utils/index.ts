export function isDev() {
    return import.meta.env.VITE_NODE_ENV === 'local';
}