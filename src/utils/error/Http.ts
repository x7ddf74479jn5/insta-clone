export class HttpError extends Error {
  url: string;
  status: number;
  statusText: string;

  constructor(response: Response) {
    super(response.statusText);

    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = "HttpError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
  }
}
