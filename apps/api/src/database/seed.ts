import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { UsersService } from "../users/users.service";
import { CategoriesService } from "../categories/categories.service";
import { AttributesService } from "../attributes/attributes.service";
import { ProductsService } from "../products/products.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);
  const categoriesService = app.get(CategoriesService);
  const attributesService = app.get(AttributesService);
  const productsService = app.get(ProductsService);

  const adminEmail = process.env.SEED_ADMIN_EMAIL || "admin@nextsora.com";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || "Admin1234";

  try {
    // Admin user
    const existing = await usersService.findByEmail(adminEmail);
    if (!existing) {
      const admin = await usersService.create({
        email: adminEmail,
        password: adminPassword,
        firstName: "Admin",
        lastName: "User",
        role: "admin",
      });
      console.log("✅ Seeded admin user:", admin.email);
    } else {
      console.log(`ℹ️ Admin already exists: ${adminEmail}`);
    }

    // Categories
    const rootCat = await categoriesService.create({ name: "Doors", slug: "doors" });
    const subCat = await categoriesService.create({ name: "Steel Doors", slug: "steel-doors", parentId: rootCat._id });
    console.log("✅ Seeded categories");

    // Attributes
    const attrMaterial = await attributesService.create({
      name: "Material",
      code: "material",
      type: "select",
      categoryId: subCat._id,
      options: ["Steel", "Stainless Steel", "Aluminum"],
      required: true,
      sortOrder: 0,
    });
    const attrThickness = await attributesService.create({
      name: "Thickness",
      code: "thickness",
      type: "number",
      categoryId: subCat._id,
      unit: "mm",
      required: false,
      sortOrder: 1,
    });
    console.log("✅ Seeded attributes");

    // Products
    await productsService.create({
      name: "Steel Door A1",
      slug: "steel-door-a1",
      categoryId: subCat._id,
      status: "active",
      sku: "SKU-DOOR-A1",
      brand: "NextSteel",
      price: 1200000,
      compareAtPrice: 1500000,
      taxPercent: 10,
      stockQty: 50,
      trackInventory: true,
      lowStockThreshold: 5,
      mainImage: "",
      gallery: [],
      attributes: {
        material: "Steel",
        thickness: 1.2,
      },
    });

    console.log("✅ Seeded sample product");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await app.close();
  }
}

bootstrap();
