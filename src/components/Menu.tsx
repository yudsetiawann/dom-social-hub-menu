/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState, useEffect } from "react";

// Data Lengkap Menu Berdasarkan Gambar
const menuCategories = [
  {
    title: "COFFEE",
    items: [
      {
        name: "AMERICANO",
        price: "18/20",
        image_url:
          "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "ESPRESSO ON THE ROCK",
        price: "25",
        image_url:
          "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "DOUBLE SHAKEN ESPRESSO",
        price: "29",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "DOM'S ORIGINAL",
        price: "25",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "KOPI LATTE",
        price: "23/25",
        image_url:
          "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SUB'S CHOICE",
        price: "35",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "HAZELNUT LATTE",
        price: "32",
        image_url:
          "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CARAMEL LATTE",
        price: "32",
        image_url:
          "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SALTED CARAMEL MACCHIATO",
        price: "37",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SCOTTISH LATTE",
        price: "32",
        image_url:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "NON-COFFEE",
    items: [
      {
        name: "CHOCOLATE",
        price: "24/27",
        image_url:
          "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CHOCO LOCO",
        price: "32",
        image_url:
          "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MATCHA GREEN TEA",
        price: "34/38",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "RED VELVET",
        price: "25/28",
        image_url:
          "https://images.unsplash.com/photo-1616035048560-619f7fb066ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "TARO LATTE WITH EGG PUDDING",
        price: "32",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1572490122747-3968b75bf699?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "VIOLET KALAMANSI",
        price: "28",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "TEA",
    items: [
      {
        name: "LEMON TEA",
        price: "23/25",
        image_url:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "LYCHEE TEA",
        price: "23/25",
        image_url:
          "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "STRAWBERRY TEA",
        price: "23/25",
        image_url:
          "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "MOCKTAIL",
    items: [
      {
        name: "TROPICAL PUNCH",
        price: "31",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SALTOVINO",
        price: "33",
        image_url:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "BLOODY MARY",
        price: "31",
        image_url:
          "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SUNSET SANGRIA",
        price: "31",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "FRAPPE",
    items: [
      {
        name: "BANG NANA YOGHURT",
        price: "40",
        image_url:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MUPPET",
        price: "38",
        image_url:
          "https://images.unsplash.com/photo-1572490122747-3968b75bf699?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CANDY CANE",
        price: "39",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1553177595-4de6bb080e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MR. P! NUTS",
        price: "39",
        image_url:
          "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "LOTUS",
        price: "38",
        image_url:
          "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "BERRY BERRY GOOD!",
        price: "38",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "MAIN COURSE",
    desc: "Complete your visit with an unforgettable Entrée, guaranteed to make your tummy full but will definitely crave for more.",
    items: [
      {
        name: "CHICK N' MATAH RICE",
        price: "35",
        image_url:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "ORIENTAL FRIED RICE",
        price: "32",
        image_url:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "KAMPOENG FRIED RICE",
        price: "32",
        image_url:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SALTED EGG POP CHICKEN",
        price: "45",
        image_url:
          "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MAYO KARAAGE RICE",
        price: "40",
        image_url:
          "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "HAM SPAGHETTI BRULEE",
        price: "38",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "BEEF AGLIO OLIO",
        price: "32",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SPAGHETTI BOLOGNESE",
        price: "32",
        image_url:
          "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SPAGHETTI CARBONARA",
        price: "35",
        image_url:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "FINGER FOODS",
    desc: "Shareable finger foods to binge on with your friends while chilling in Dom. This could never go wrong.",
    items: [
      {
        name: "FRENCH FRIES & SAUSAGE",
        price: "25",
        image_url:
          "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "AL FRESCO NACHOS",
        price: "30",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CHEESE CROQUETTE BALLS",
        price: "25",
        image_url:
          "https://images.unsplash.com/photo-1531749668024-3450949d2907?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "DOMS WINGS",
        price: "30",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "PISANG GORENGNYA DOM",
        price: "26",
        signature: true,
        image_url:
          "https://images.unsplash.com/photo-1620014022373-c1f9da248c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "ROTI BAKAR",
        price: "20",
        image_url:
          "https://images.unsplash.com/photo-1525430182374-eb7ea01596ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CHURRO BITES",
        price: "25",
        image_url:
          "https://images.unsplash.com/photo-1624371414361-e670ead0186b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
];

export default function Menu() {
  // State untuk melacak gambar yang aktif dan posisi mouse
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update posisi gambar mengikuti kursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Hanya tambahkan listener jika ada gambar aktif untuk performa
    if (activeImage) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeImage]);

  return (
    <section
      id="menu"
      className="relative min-h-screen bg-dom-black py-24 border-t border-dom-red/20 overflow-hidden"
    >
      {/* Container Gambar Hover (Akan muncul mengikuti kursor) */}
      {activeImage && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200 ease-in-out border-2 border-dom-red p-1 bg-dom-black/80 backdrop-blur-sm"
          style={{
            left: `${mousePos.x + 20}px`, // Offset sedikit dari kursor
            top: `${mousePos.y + 20}px`,
            width: "250px",
            height: "250px",
          }}
        >
          {/* Sudut Frame ala HUD */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-dom-red -translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-dom-red translate-x-1 translate-y-1"></div>

          <img
            src={activeImage}
            alt="Menu Preview"
            className="w-full h-full object-cover filter contrast-125 saturate-50 sepia-[.3] hue-rotate-[-30deg]"
            // Filter CSS di atas memberikan efek 'kamera keamanan' pada gambar
          />
          <div className="absolute bottom-2 right-2 bg-dom-black/90 text-dom-red font-mono text-[8px] px-1 border border-dom-red/30">
            VISUAL_DATA_MATCH
          </div>
        </div>
      )}

      {/* Konten Utama Menu Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 border-l-4 border-dom-red pl-6">
          <h2 className="text-3xl md:text-5xl font-bold text-dom-red uppercase tracking-widest font-sans">
            System_Directory <br /> <span className="text-white">/ Menu</span>
          </h2>
          <p className="font-mono text-xs text-white/40 mt-2">
            // HOVER OVER ITEMS TO INITIATE VISUAL SCAN
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-dom-red uppercase tracking-widest mb-2 font-sans border-b border-dom-red/20 pb-2 flex items-center gap-2">
                  {category.title}
                </h3>
                {category.desc && (
                  <p className="text-sm text-white/60 font-sans italic">
                    {category.desc}
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-3 mt-6">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex justify-between items-end group/item cursor-crosshair relative py-1"
                    onMouseEnter={() => setActiveImage(item.image_url)}
                    onMouseLeave={() => setActiveImage(null)}
                  >
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="text-sm font-sans uppercase font-bold text-white/80 group-hover/item:text-dom-red group-hover/item:pl-2 transition-all duration-300">
                        {item.name}
                      </span>
                      {item.signature && (
                        <span className="text-dom-red font-bold text-sm">
                          *
                        </span>
                      )}
                    </div>

                    <div className="grow border-b border-dashed border-white/10 mx-4 group-hover/item:border-dom-red/50 transition-colors"></div>

                    <span className="font-mono text-sm font-bold text-white/80 group-hover/item:text-white">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
