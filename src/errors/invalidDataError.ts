export default function invalidDataError(message?: string | string[]) {
    return {
        name: "invalidDataError",
        message: message ?? "Invalid data"
    }
}