import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

const generarToken = (idUsuario) => {
  return jwt.sign(
    { id: idUsuario }, 
    'kj2h3k4j2h3k4j2h3k4j2h3k4j2h3k4j2h3k4', 
    { expiresIn: '1h' }
  );
};

export async function POST(request) {
  try {
    const { email, contrasena } = await request.json();

    // Buscar al usuario en la base de datos
    const cliente = await prisma.cliente.findUnique({ 
      where: { email } 
    });

    if (!cliente) {
      return NextResponse.json(
        { message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Comparar la contraseña ingresada con la contraseña hasheada
    const passwordMatch = await bcrypt.compare(contrasena, cliente.contrasena);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Generar el token JWT
    const token = generarToken(cliente.cliente_id);

    return NextResponse.json(
      { 
        success: true,
        token,
        user: {
          id: cliente.cliente_id,
          nombre: cliente.nombre,
          email: cliente.email
        }
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al iniciar sesión' },
      { status: 500 }
    );
  }
}
