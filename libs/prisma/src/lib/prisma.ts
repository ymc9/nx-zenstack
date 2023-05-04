// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient } from '@prisma/client';
import { withPresets } from '@zenstackhq/runtime';

const prisma = new PrismaClient();
const enhanced = withPresets(prisma);

export { prisma, enhanced };
