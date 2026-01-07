import bcrypt from "bcryptjs";

async function run() {
  const hash = await bcrypt.hash("Admin@123", 8);
  console.log(hash);
}

run();
