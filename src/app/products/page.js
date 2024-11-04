import { HeaderComponent } from "@/components/component/components-header";
import { Footer } from "@/components/component/footer";
import ProductList from "@/components/component/product-list";
import { CommentsJsx } from "@/components/component/components-comments";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      <main className="flex-1 w-full">
        <ProductList />
      </main>
      <Footer />
      <CommentsJsx />
    </div>
  );
}
