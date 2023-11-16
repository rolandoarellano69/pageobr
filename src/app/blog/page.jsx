
import BlogCard from "@/components/blog/BlogCard";

import Link from "next/link";

const HomePage = () => {
  return (
    <section className="container mx-auto p-10 py-6 sm:py-12 mt-[4rem] text-gray-900 bg-gray-200">
      <div className="">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 flex ">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Nuestro Blog
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-[40px] text-center">
                Nuestras últimas noticias
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Te compartimos las noticias más relevantes del sector inmobiliario y financiero.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap    6767                                                                                                                ">
        <BlogCard
          date="20 May 2021"
          CardTitle="EVITA EL INCREMENTO DE TU DEUDA EN INFONAVIT ESTE 2024"
          CardDescription="Cada inicio de año, todos los créditos denominados en Veces Salario Mínimo (VSM), registran un incremento ligado al aumento del salario mínimo."
          imagen="/2.jpg"
          href="/blog/post-1"
        />
        <BlogCard
          date="20 May 2021"
          CardTitle="CON INFONAVIT YA PUEDES SOLICITAR MAS DE UN FINANCIAMIENTO CON CRÉDITOS SUBSECUENTES."
          CardDescription="El Instituto del Fondo Nacional de la Vivienda para los Trabajadores (Infonavit) informó mediante un comunicado que eliminó las restricciones que impedían a las personas solicitar mas de un financiamiento. 
          "
          imagen="/1.jpg"
          href="/blog/post-2"
        />
        <BlogCard
          date="20 May 2021"
          CardTitle="¿SABES CUANTO TE PRESTA INFONAVIT?"
          CardDescription="Podrías estar perdiendo la oportunidad de comprar tu casa."
          imagen="/3.jpg"
          href="/blog/post-3"
        />
      </div>
    </section>
  );
};

export default HomePage;