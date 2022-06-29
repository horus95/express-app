import { NestFactory } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  // Swagger setup
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Puntos Bee Admin Backend')
    .setDescription('The Puntos bee admin backend API description')
    .setVersion('1.0')
    .addTag('Puntos Bee')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // app.useGlobalGuards(new (AuthGuard('jwt'))());

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'My API Docs',
  };

  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
