import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const AuthorizedUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        console.log(data);
        
        const request = ctx.switchToHttp().getRequest();
        const token = `${request.headers.authorization}`.replace('Bearer ', '')
        const decodeToken = new JwtService().decode(token)
        return decodeToken['userId']
    },
);