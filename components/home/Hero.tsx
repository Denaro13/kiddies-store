import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl capitalize ">
          We are changing the way you shop for your kids
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nemo
          harum, distinctio non nisi saepe quo at ullam id inventore sed
          architecto illum qui corporis dolorum minima hic explicabo. Deserunt.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
