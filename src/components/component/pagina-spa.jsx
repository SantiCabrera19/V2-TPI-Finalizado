import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Header } from '@/components/component/header';
import { Footer } from '@/components/component/footer';
import { MapAside } from '@/components/component/map-aside';
import { ProductCarousel } from "@/components/component/product-carousel";
import { CommentsJsx } from "@/components/component/components-comments";

export function PaginaSpa() {

  // Función para hacer scroll suave
  const smoothScroll = (e, anchorId) => {
    e.preventDefault();
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="relative h-[50vh] md:h-[60vh]">
          <img
            src="/image.png"
            alt="Spa Sentirse Bien Cover"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Escapa al Spa Sentirse Bien</h1>
            <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
              Experimenta lo máximo en relajación y rejuvenecimiento en nuestro lujoso spa. Disfruta de nuestros tratamientos exclusivos y promociones.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Ver productos
              </Link>
              <Link
                href="#about"
                scroll={true}
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Más información
              </Link>
            </div>
          </div>
        </section>
        <section id="products" className="py-12 md:py-16 lg:py-20 flex justify-center items-center">
          <ProductCarousel />
        </section>
        <section id="about" style={{ backgroundColor: '#fdbeff' }} className="py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <img
                  src="/LogoTPI.png"
                  alt="Spa Oasis About"
                  className="h-full w-full rounded-lg object-cover"
                  width={800}
                  height={600}
                  style={{ aspectRatio: "800/500", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Acerca de Spa Sentirse Bien</h2>
                <p className="text-muted-foreground md:text-lg">
                  Spa Sentirse Bien es un lujoso retiro dedicado a brindar experiencias de bienestar excepcionales. Nuestro equipo de terapeutas y esteticistas capacitados se compromete a ayudarte a alcanzar un estado de relajación profunda y rejuvenecimiento.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Ubicado en un entorno natural sereno, nuestro spa ofrece un escape tranquilo de las tensiones de la vida cotidiana. Disfruta de nuestra gama de tratamientos exclusivos, desde masajes relajantes hasta faciales revitalizantes, y déjanos ayudarte a relajarte y recargarte.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="bg-white py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <MapAside />
              <div className="space-y-4 bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contáctanos</h2>
                <p className="text-muted-foreground md:text-lg">
                  Estamos aquí para ayudarte a planificar tu experiencia de spa perfecta. Ponte en contacto con nuestro equipo para obtener más información sobre nuestros servicios, hacer una reserva o consultar sobre nuestras promociones exclusivas.
                </p>
                <form className="space-y-4">
                  <Input type="text" placeholder="Nombre" className="w-full pl-4" />
                  <Input type="email" placeholder="Correo electrónico" className="w-full pl-4" />
                  <Textarea placeholder="Mensaje" className="w-full pl-4 h-32" rows="5" maxLength="500" />
                  <Button type="submit" className="w-full">
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CommentsJsx />
    </div>
  );
}


