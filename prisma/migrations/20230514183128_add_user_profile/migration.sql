-- AlterTable
ALTER TABLE "user" ADD COLUMN     "biography" TEXT;

-- CreateTable
CREATE TABLE "users_follows" (
    "follower_id" TEXT NOT NULL,
    "following_id" TEXT NOT NULL,

    CONSTRAINT "users_follows_pkey" PRIMARY KEY ("follower_id","following_id")
);

-- AddForeignKey
ALTER TABLE "users_follows" ADD CONSTRAINT "users_follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_follows" ADD CONSTRAINT "users_follows_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
