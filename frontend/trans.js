import fs from "fs";
import data from "./data.json" assert { type: "json" };

fs.writeFile(
  "products.json",
  JSON.stringify(
    data.products.map((p) => ({
      name: p.title,
      unitPrice: p.price,
      stock: p.stock,
      description: p.description,
      images: p.images,
      category: p.category,
      addedBy: "admin",
    }))
  ),
  (err) => {
    if (err) console.log(err);
    else console.log("Done writing products.json");
  }
);
