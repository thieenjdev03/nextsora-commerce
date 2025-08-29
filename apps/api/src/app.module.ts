import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UploadModule } from './upload/upload.module';
import { CategoriesModule } from './categories/categories.module';
import { AttributesModule } from './attributes/attributes.module';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLogger } from './common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        process.env.MONGO_CONNECTION ||
        'mongodb://localhost:27017/nextsora',
      {
        connectionFactory: (connection) => {
          console.log('🗄️  MongoDB connected successfully');
          return connection;
        },
      }
    ),
    AuthModule,
    UsersModule,
    UploadModule,
    CategoriesModule,
    AttributesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule {}