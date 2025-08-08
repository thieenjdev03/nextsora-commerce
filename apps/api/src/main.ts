import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import {
  CustomLogger,
  TransformInterceptor,
  LoggingInterceptor,
  AllExceptionsFilter,
} from "./common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });

  // Enable CORS for multiple frontend URLs
  app.enableCors({
    origin: [
      process.env.FRONTEND_URL,
      process.env.WEB_URL,
      process.env.DASHBOARD_URL,
      "http://localhost:3000",
      "http://localhost:3002",
      "http://localhost:3003",
    ].filter(Boolean),
    credentials: true,
  });

  // Global exception filter
  app.useGlobalFilters(new AllExceptionsFilter(new CustomLogger()));

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  // Global interceptors
  app.useGlobalInterceptors(
    new LoggingInterceptor(new CustomLogger()),
    new TransformInterceptor()
  );

  // Global prefix (must be set BEFORE Swagger setup)
  app.setGlobalPrefix("api");

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle("NextSora API")
    .setDescription("NextSora Backend API Documentation")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  const port = process.env.PORT || 3080;
  await app.listen(port);

  console.log(`🚀 NextSora API is running on: http://localhost:${port}`);
  console.log(`📚 Swagger docs available at: http://localhost:${port}/docs`);
}

bootstrap();
