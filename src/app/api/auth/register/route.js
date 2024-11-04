import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { nombre, apellido, email, telefono, contrasena } = await request.json();

    // Validaciones básicas
    if (!email || !contrasena || !nombre || !apellido) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.cliente.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'El email ya está registrado' },
        { status: 400 }
      );
    }

    // Hashear la contraseña
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    // Crear el nuevo usuario en la base de datos
    const cliente = await prisma.cliente.create({
      data: {
        nombre,
        apellido,
        email,
        telefono,
        contrasena: hashedPassword,
      },
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Usuario creado correctamente',
        user: {
          id: cliente.cliente_id,
          nombre: cliente.nombre,
          email: cliente.email
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear el usuario' },
      { status: 500 }
    );
  }
}
