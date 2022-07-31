-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "wordIndex" INTEGER NOT NULL,
    "gameId" INTEGER,
    CONSTRAINT "Player_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "words" TEXT NOT NULL,
    "startedAt" DATETIME,
    "isOver" BOOLEAN NOT NULL DEFAULT false,
    "hostId" INTEGER NOT NULL
);
