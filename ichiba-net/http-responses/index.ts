export class BadRequestResponse extends Response {
  constructor(...args: ConstructorParameters<typeof Response>) {
    super(args[0] ?? 'Bad Request', {
      status: 400,
      ...args[1],
    });
  }
}

export class NotFoundResponse extends Response {
  constructor(...args: ConstructorParameters<typeof Response>) {
    super(args[0] ?? 'Not Found', {
      status: 404,
      ...args[1],
    });
  }
}

export class InternalServerErrorResponse extends Response {
  constructor(...args: ConstructorParameters<typeof Response>) {
    super(args[0] ?? 'Internal Server Error', {
      status: 500,
      ...args[1],
    });
  }
}

export class RedirectResponse extends Response {
  constructor(location: string, init?: ResponseInit) {
    super(null, {
      status: 302,
      ...init,
      headers: {
        Location: location,
        ...init?.headers,
      },
    });
  }
}
