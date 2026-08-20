import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getResponse();
    const statusCode = request.statusCode ?? 200;
    return next.handle().pipe(
      map((data) => ({
        statusCode,
        timestamp: new Date().toISOString(),
        data,
      }))
    );
  }
}
