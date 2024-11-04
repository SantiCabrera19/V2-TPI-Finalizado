import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const comentarios = await prisma.comentario.findMany({
      include: {
        cliente: {
          select: {
            nombre: true
          }
        }
      },
      orderBy: {
        fecha: 'desc'
      }
    });

    return NextResponse.json(comentarios);
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    return NextResponse.json(
      { message: 'Error al obtener los comentarios: ' + error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { cliente_id, contenido } = await request.json();

    if (!cliente_id || !contenido) {
      return NextResponse.json(
        { message: 'Cliente ID y contenido son requeridos' },
        { status: 400 }
      );
    }

    const cliente = await prisma.cliente.findUnique({
      where: { cliente_id },
      select: { nombre: true, email: true }
    });

    if (!cliente) {
      return NextResponse.json(
        { message: 'Cliente no encontrado' },
        { status: 404 }
      );
    }

    const comentario = await prisma.comentario.create({
      data: {
        cliente_id,
        contenido,
        nombre: cliente.nombre,
        email: cliente.email,
        fecha: new Date()
      }
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Comentario creado correctamente',
        comentario 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear el comentario' },
      { status: 500 }
    );
  }
}
