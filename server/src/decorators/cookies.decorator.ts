import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Cookie = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  console.log("COOOOKIE", request.cookies);
  console.log("HEADERS", request.headers.cookie);
  if (!request.cookies) {
    return null; // Вернуть null или другое значение по умолчанию, если cookies не определены
  }
  return key && key in request.cookies
    ? request.cookies[key]
    : key
    ? null
    : request.cookies;
});
