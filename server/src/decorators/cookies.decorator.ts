import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetHeader = createParamDecorator((key: string, ctx: ExecutionContext) => {
  let refreshtoken = "";
  const request = ctx.switchToHttp().getRequest();
  for (const elem of request.headers.cookie.split(" ")) {
    if (elem.includes(key)) {
      refreshtoken = elem.split("=")[1];
    }
  }
  if (!request.headers.cookie) {
    return null; // Вернуть null или другое значение по умолчанию, если cookies не определены
  }
  return refreshtoken;
});
