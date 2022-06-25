
declare interface FetchRequestOptions{
    prefix?: string
    headers?: HeadersInit
    params?: Record<string, string | number | boolean>
    disable_json?: boolean
}

declare interface FetchOptions extends RequestInit, FetchRequestOptions {

}

