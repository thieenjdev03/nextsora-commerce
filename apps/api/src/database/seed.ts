import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { UsersService } from "../users/users.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  const adminEmail = process.env.SEED_ADMIN_EMAIL || "admin@nextsora.com";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || "Admin1234";

  try {
    // Check if admin exists
    const existing = await usersService.findByEmail(adminEmail);
    if (existing) {
      console.log(`Admin user already exists: ${adminEmail}`);
      await app.close();
      return;
    }

    const admin = await usersService.create({
      email: adminEmail,
      password: adminPassword,
      firstName: "Admin",
      lastName: "User",
      role: "admin",
    });

    console.log("✅ Seeded admin user:", admin.email);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await app.close();
  }
}

bootstrap();
