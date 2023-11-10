export default function conflictError(message?: string | string[]) {
    return {
        name: "conflictError",
        message: message ?? "Conflict"
    }
}