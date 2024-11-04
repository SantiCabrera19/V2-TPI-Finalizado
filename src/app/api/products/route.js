import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const servicios = await prisma.servicio.findMany();
    return NextResponse.json(servicios);
  } catch (error) {
    console.error('Error al obtener servicios:', error);
    return NextResponse.json(
      { message: 'Error al obtener los servicios' },
      { status: 500 }
    );
  }
}
