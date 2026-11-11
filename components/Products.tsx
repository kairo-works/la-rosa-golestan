"use client";

import ProductCard from "./ProductCard";

const DISHES = [
  {
    name: "Tom yum seafood",
    desc: "Thai hot-and-sour soup, loaded with seafood.",
    chip: "Thai hot & sour",
    price: "Ask us",
    image:
      "https://img-verda.wongnai.com/p/1920x0/2026/04/17/97c73397a6d247dd948683f062301612.jpg",
    alt: "A bowl of tom yum seafood soup",
  },
  {
    name: "Nasi goreng",
    desc: "Indonesian fried rice — the Bali classic.",
    chip: "The Bali classic",
    price: "Ask us",
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Nasi-Goreng-wide-FS-and-foodporn-57.jpg",
    alt: "Nasi goreng topped with a fried egg",
  },
  {
    name: "Kung pao chicken",
    desc: "Stir-fried chicken, peanuts and dried chillies.",
    chip: "Peanuts & chillies",
    price: "Ask us",
    image:
      "https://thewoksoflife.com/wp-content/uploads/2019/05/kung-pao-chicken-9.jpg",
    alt: "Kung pao chicken with peanuts",
  },
  {
    name: "Crispy fries",
    desc: "Golden, salty — made for a cold drink at sunset.",
    chip: "Golden & salty",
    price: "Ask us",
    image:
      "https://www.dahliaskitchen.hungrrr.co.uk/uploads/images/slideshow/1587309319frenchfries923687_1280.jpg",
    alt: "A pile of golden crispy fries",
  },
  {
    name: "Tequila sunrise",
    desc: "Tequila, orange juice and grenadine — the house pour.",
    chip: "The house pour",
    price: "Ask us",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sunrise-003.jpg",
    alt: "A Tequila Sunrise cocktail",
  },
];

export default function Products() {
  return (
    <section id="collection" className="relative bg-black px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="frame-brackets mx-auto max-w-3xl px-2 text-center sm:px-6">
          <p className="smallcaps text-[11px] text-[#C9A961]">The Menu</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-[0.06em] text-[#F5F1E8] sm:text-5xl">
            THE COLLECTION
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#F5F1E8]/70 sm:text-base">
            From the kitchen &amp; the bar.
          </p>
        </div>

        {/* 5 dishes on a 6-column grid: 3 on the first row, 2 centred
            on the second — no dangling empty cell. */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          {DISHES.map((d, i) => (
            <div
              key={d.name}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <ProductCard
                name={d.name}
                desc={d.desc}
                chip={d.chip}
                price={d.price}
                image={d.image}
                alt={d.alt}
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-light tracking-[0.14em] text-[#F5F1E8]/45">
          Ask us for today&apos;s prices
        </p>
      </div>
    </section>
  );
}
