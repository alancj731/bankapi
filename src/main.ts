import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: '*', // Allow all headers
    credentials: true, // Allow cookies and credentials
  });

  await app.listen(3000);
}
bootstrap();
