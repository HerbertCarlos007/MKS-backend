import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  dotenv.config({
    path: '.env'
    
  })
  
  console.log(process.env.TYPEORM_HOST);
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Catalogos de filme')
    .setDescription('Catalos de filmes')
    .setVersion('1.0')
    .addTag('Catalagos')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(process.env.PORT || 3000) ;
  
  
}
bootstrap();
