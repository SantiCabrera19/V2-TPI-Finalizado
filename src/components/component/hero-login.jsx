import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast";

export function HeroLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({ email: '', contrasena: '' });
  const [registerData, setRegisterData] = useState({ nombre: '', apellido: '', telefono: '', email: '', contrasena: '' });
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = JSON.parse(atob(token.split('.')[1]));
      setUser(userData);
    }
  }, []);

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRegisterChange = (e) => {
    const { id, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });
      
      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }
      
      const data = await response.json();
      console.log('Inicio de sesión exitoso:', data);

      localStorage.setItem('token', data.token);
      setUser(data.user);

      router.push('/products');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrarse');
      }

      const data = await response.json();
      console.log('Registro exitoso:', data);

      toast({
        title: 'Registro exitoso',
        description: 'Ahora puedes iniciar sesión con tu nueva cuenta.',
      });

      router.push('/products');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Error al cerrar sesión');
      }

      localStorage.removeItem('token');
      setUser(null);
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          Acceso
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Bienvenido a Spa Sentirse Bien</DialogTitle>
          <DialogDescription>Selecciona la opción de acceso que deseas utilizar</DialogDescription>
        </DialogHeader>
        {user ? (
          <div className="text-center mb-4">
            <p>Usuario logueado: {user.nombre}</p>
            <Button onClick={handleLogout} className="w-full">Cerrar Sesión</Button>
          </div>
        ) : (
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="register">Registrarse</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="space-y-4 py-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" value={loginData.email} onChange={handleLoginChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contrasena">Contraseña</Label>
                  <Input id="contrasena" type="password" value={loginData.contrasena} onChange={handleLoginChange} />
                </div>
                <Button type="submit" className="w-full">Iniciar Sesión</Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegisterSubmit} className="space-y-4 py-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" type="text" value={registerData.nombre} onChange={handleRegisterChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input id="apellido" type="text" value={registerData.apellido} onChange={handleRegisterChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" type="tel" value={registerData.telefono} onChange={handleRegisterChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" value={registerData.email} onChange={handleRegisterChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contrasena">Contraseña</Label>
                  <Input id="contrasena" type="password" value={registerData.contrasena} onChange={handleRegisterChange} />
                </div>
                <Button type="submit" className="w-full">Registrarse</Button>
              </form>
            </TabsContent>
          </Tabs>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </DialogContent>
    </Dialog>
  );
}
