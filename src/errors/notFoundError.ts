export default function notFoundError(message?: string | string[]) {
    return {
        name: "notFoundError",
        message: message ?? "Not found"
    }
}