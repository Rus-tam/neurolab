import { IJWTPayload } from "@types";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
  (key: keyof IJWTPayload, ctx: ExecutionContext): IJWTPayload | Partial<IJWTPayload> => {
    const request = ctx.switchToHttp().getRequest();
    return key ? request.user[key] : request.user;
  },
);
