class CustomNetworkError extends Error {
    response: Response

    constructor(name: string, response: Response) {
        super(name)
        this.response = response
    }
}

export class NetworkError extends CustomNetworkError {
    constructor(response: Response) {
        super('NETWORK_ERROR', response)
    }
}