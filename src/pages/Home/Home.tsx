// pages/Home.tsx
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { fetchProducts, Product } from "../../services/productService";
import { Spinner } from "../../components/Spinner/Spinner";
import './Home.css';

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  
  return (
    <section className="home">
      <h2 className="home-title">Bem-vindo à DevImpact Solutions</h2>
      <p><strong>DevImpact Solutions</strong>, é uma empresa especializada em soluções digitais de alto impacto.</p>
      <p>Confira nossos sistemas e plataformas em destaque:</p>

      {loading ? (
        <Spinner type="rodando" size="grande" colorClass="azul" blockScreen />
      ) : (
        <div className="products-grid">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}