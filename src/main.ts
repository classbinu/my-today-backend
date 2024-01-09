import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 환경 변수 읽어오기
  const jwtAccessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;

  // 환경 변수 로깅 또는 출력
  console.log(`JWT_ACCESS_TOKEN_SECRET: ${jwtAccessTokenSecret}`);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  app.enableCors(); // 우선 전체 허용
  await app.listen(3009);
}
bootstrap();
