'use client';
import { useCart } from '@/lib/cart-context';
import { CartPageComponent } from '@/components/component/components-cart-page';
import { HeaderComponent } from "@/components/component/components-header";
import { Footer } from "@/components/component/footer";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      <CartPageComponent 
        items={items}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      <Footer />
    </div>
  );
}
