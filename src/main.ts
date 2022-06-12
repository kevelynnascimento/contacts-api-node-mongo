import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

function createImagesPath() {
  if (!fs.existsSync(process.env.IMAGES_PATH))
    fs.mkdirSync(process.env.IMAGES_PATH, { recursive: true });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Coin GM')
    .setDescription('API Rest Coin.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  createImagesPath();

  const port = process.env.PORT || 5000;

  await app.listen(port);
}
bootstrap();