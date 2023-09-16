import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetHeader = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  if (!request.headers.cookie) {
    return null; // Вернуть null или другое значение по умолчанию, если cookies не определены
  }
  const value = request.headers.cookie.split("=");
  return request.headers.cookie.split("=")[1];
});
