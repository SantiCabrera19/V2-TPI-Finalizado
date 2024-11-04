import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Aquí podrías invalidar el token si estás usando un sistema de gestión de sesiones
    // En este caso, simplemente se eliminará el token del cliente
    return NextResponse.json({ message: 'Sesión cerrada correctamente' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al cerrar sesión' }, { status: 500 });
  }
}
