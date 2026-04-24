/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data Lengkap dengan tambahan deskripsi per item
const menuCategories = [
  {
    title: "COFFEE",
    items: [
      {
        name: "AMERICANO",
        price: "18/20",
        desc: "Ekstraksi espresso murni dipadu dengan air mineral. Klasik, tajam, dan membangunkan sistem.",
        image_url:
          "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "ESPRESSO ON THE ROCK",
        price: "25",
        desc: "Double shot espresso dituangkan langsung di atas es batu raksasa. Menjaga intensitas tanpa dilusi berlebih.",
        image_url:
          "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "DOUBLE SHAKEN ESPRESSO",
        price: "29",
        signature: true,
        desc: "Dikocok agresif dengan sirup rahasia DOM untuk tekstur busa tebal dan rasa yang lebih membumi.",
        image_url:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "DOM'S ORIGINAL",
        price: "25",
        signature: true,
        desc: "Kopi susu aren racikan khas dengan rasio creamy dan strong yang sangat presisi.",
        image_url:
          "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "KOPI LATTE",
        price: "23/25",
        desc: "Perpaduan seimbang antara espresso dan susu segar. Lembut namun tetap bernyawa.",
        image_url:
          "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SUB'S CHOICE",
        price: "35",
        signature: true,
        desc: "Pilihan rahasia dari sistem barista kami. Kombinasi rasa tak terduga yang selalu tepat sasaran.",
        image_url:
          "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "HAZELNUT LATTE",
        price: "32",
        desc: "Suntikan sirup hazelnut premium ke dalam latte klasik. Manis, beraroma kacang, dan menenangkan.",
        image_url:
          "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CARAMEL LATTE",
        price: "32",
        desc: "Ekstraksi kopi berpadu dengan karamel cair. Keseimbangan absolut antara pahit dan manis.",
        image_url:
          "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SALTED CARAMEL MACCHIATO",
        price: "37",
        signature: true,
        desc: "Sentuhan garam laut pada karamel berpadu dengan macchiato. Dimensi rasa yang kompleks di lidah.",
        image_url:
          "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SCOTTISH LATTE",
        price: "32",
        desc: "Sensasi rasa butterscotch yang khas menyatu dengan espresso dan susu kalibrasi tingkat tinggi.",
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
        desc: "Kakao pekat pilihan yang diseduh sempurna. Murni, kental, dan memanjakan sistem sensorik.",
        image_url:
          "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CHOCO LOCO",
        price: "32",
        desc: "Cokelat ganda untuk dosis gula dan energi ekstra. Overload yang menyenangkan.",
        image_url:
          "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MATCHA GREEN TEA",
        price: "34/38",
        signature: true,
        desc: "Bubuk matcha premium dari Jepang. Earthy, creamy, dengan antioksidan tinggi untuk fokus maksimal.",
        image_url:
          "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "RED VELVET",
        price: "25/28",
        desc: "Ekstrak red velvet cair dengan susu murni. Manis, creamy, dengan visual yang mencolok.",
        image_url:
          "https://images.unsplash.com/photo-1616035048560-619f7fb066ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "TARO LATTE WITH EGG PUDDING",
        price: "32",
        signature: true,
        desc: "Manisnya ubi ungu berpadu dengan tekstur lembut egg pudding di dasar gelas.",
        image_url:
          "https://images.unsplash.com/photo-1572490122747-3968b75bf699?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "VIOLET KALAMANSI",
        price: "28",
        signature: true,
        desc: "Jeruk kalamansi segar dengan sentuhan warna violet. Asam, dingin, mereboot kelelahan tubuh.",
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
        desc: "Teh hitam pekat dikawinkan dengan perasan lemon segar. Standar hidrasi optimal.",
        image_url:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "LYCHEE TEA",
        price: "23/25",
        desc: "Infusi teh ringan dengan sirup dan buah leci utuh. Manis dan menyegarkan.",
        image_url:
          "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "STRAWBERRY TEA",
        price: "23/25",
        desc: "Ekstrak stroberi berpadu dengan teh. Segar dengan profil rasa fruity yang tajam.",
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
        desc: "Ledakan rasa nanas, citrus, dan soda. Refreshment sempurna setelah sesi panjang.",
        image_url:
          "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SALTOVINO",
        price: "33",
        desc: "Kombinasi asam manis dengan pinggiran gelas berlapis garam laut.",
        image_url:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "BLOODY MARY",
        price: "31",
        desc: "Mocktail tomat dan rempah dengan tendangan rasa gurih dan pedas. Berani dan menantang.",
        image_url:
          "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SUNSET SANGRIA",
        price: "31",
        signature: true,
        desc: "Kombinasi buah-buahan segar dan sirup anggur tanpa alkohol. Menawan bak senja distopia.",
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
        desc: "Pisang dan yoghurt diblend beku dengan sempurna. Nutrisi padat dalam bentuk cair.",
        image_url:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MUPPET",
        price: "38",
        desc: "Frappe manis dengan kombinasi sirup rahasia yang playful dan mendinginkan.",
        image_url:
          "https://images.unsplash.com/photo-1572490122747-3968b75bf699?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CANDY CANE",
        price: "39",
        signature: true,
        desc: "Sensasi mint dan manis permen dalam tekstur frappe beku. Mendinginkan sirkuit Anda.",
        image_url:
          "https://images.unsplash.com/photo-1553177595-4de6bb080e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MR. P! NUTS",
        price: "39",
        desc: "Frappe berbasis kacang dengan tekstur renyah dan gurih yang mendominasi setiap seruputan.",
        image_url:
          "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "LOTUS",
        price: "38",
        desc: "Biskuit karamel Lotus Biscoff yang diblend menjadi frappe kental. Manis, berempah, adiktif.",
        image_url:
          "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "BERRY BERRY GOOD!",
        price: "38",
        signature: true,
        desc: "Campuran berbagai buah beri pilihan. Asam, manis, beku, dan meledak di mulut.",
        image_url:
          "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "MAIN COURSE",
    items: [
      {
        name: "CHICK N' MATAH RICE",
        price: "35",
        desc: "Potongan ayam krispi disiram sambal matah otentik yang melimpah. Disajikan dengan nasi hangat.",
        image_url:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "ORIENTAL FRIED RICE",
        price: "32",
        desc: "Nasi goreng bumbu oriental dengan wok-hei yang otentik dan berasap.",
        image_url:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "KAMPOENG FRIED RICE",
        price: "32",
        desc: "Resep klasik lokal dengan bumbu rempah tradisional dan pelengkap standar yang mengeyangkan.",
        image_url:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SALTED EGG POP CHICKEN",
        price: "45",
        desc: "Popcorn chicken berbalut saus telur asin kaya rasa. Gurih, manis, bertekstur.",
        image_url:
          "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "MAYO KARAAGE RICE",
        price: "40",
        desc: "Ayam goreng ala Jepang super renyah berpadu dengan mayones gurih di atas mangkuk nasi.",
        image_url:
          "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "HAM SPAGHETTI BRULEE",
        price: "38",
        signature: true,
        desc: "Spaghetti panggang dengan saus krim, potongan ham, dan lapisan keju leleh di atasnya.",
        image_url:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "BEEF AGLIO OLIO",
        price: "32",
        signature: true,
        desc: "Pasta klasik dengan minyak zaitun, bawang putih, serpihan cabai, dan irisan daging sapi gurih.",
        image_url:
          "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SPAGHETTI BOLOGNESE",
        price: "32",
        desc: "Saus daging tomat yang dimasak perlahan melumuri pasta al dente dengan sempurna.",
        image_url:
          "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "SPAGHETTI CARBONARA",
        price: "35",
        desc: "Pasta krim kental dengan keju parmesan dan lada hitam. Padat, creamy, dan mengenyangkan.",
        image_url:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    title: "FINGER FOODS",
    items: [
      {
        name: "FRENCH FRIES & SAUSAGE",
        price: "25",
        desc: "Potongan kentang goreng renyah berdampingan dengan sosis premium. Cocok untuk ngemil santai.",
        image_url:
          "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "AL FRESCO NACHOS",
        price: "30",
        signature: true,
        desc: "Keripik tortilla berlapis saus keju, daging, dan jalapeno. Sempurna untuk dibagi bersama squad.",
        image_url:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CHEESE CROQUETTE BALLS",
        price: "25",
        desc: "Bola-bola kroket kentang goreng dengan inti keju mozzarella yang meleleh saat digigit.",
        image_url:
          "https://images.unsplash.com/photo-1531749668024-3450949d2907?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "DOMS WINGS",
        price: "30",
        signature: true,
        desc: "Sayap ayam berlapis bumbu khas DOM. Pedas, gurih, dan sepadan dengan tangan yang kotor.",
        image_url:
          "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "PISANG GORENGNYA DOM",
        price: "26",
        signature: true,
        desc: "Pisang manis berbalut adonan tepung renyah, digoreng presisi hingga keemasan.",
        image_url:
          "https://images.unsplash.com/photo-1620014022373-c1f9da248c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "ROTI BAKAR",
        price: "20",
        desc: "Roti tebal dipanggang dengan mentega, disajikan dengan berbagai pilihan topping klasik.",
        image_url:
          "https://images.unsplash.com/photo-1525430182374-eb7ea01596ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "CHURRO BITES",
        price: "25",
        desc: "Potongan churros renyah bertabur kayu manis dan gula, siap dicelup ke dalam saus cokelat.",
        image_url:
          "https://images.unsplash.com/photo-1624371414361-e670ead0186b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
];

export default function Menu() {
  // State menyimpan ID item yang sedang dibuka (format: "catIndex-itemIndex")
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    // Jika diklik item yang sama, maka tutup. Jika beda, buka yang baru.
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section
      id="menu"
      className="relative min-h-screen bg-dom-black py-24 border-t border-dom-red/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 border-l-4 border-dom-red pl-6">
          <h2 className="text-3xl md:text-5xl font-bold text-dom-red uppercase tracking-widest font-sans">
            System_Directory <br /> <span className="text-white">/ Menu</span>
          </h2>
          <p className="font-mono text-xs text-white/40 mt-2">
            // TAP ON ITEMS TO EXTRACT DATA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {menuCategories.map((category, catIdx) => (
            <div key={catIdx} className="relative group">
              <h3 className="text-2xl font-bold text-dom-red uppercase tracking-widest mb-4 font-sans border-b border-dom-red/20 pb-2">
                {category.title}
              </h3>

              <ul className="flex flex-col">
                {category.items.map((item, itemIdx) => {
                  const itemId = `${catIdx}-${itemIdx}`;
                  const isExpanded = expandedItem === itemId;

                  return (
                    <li
                      key={itemIdx}
                      className="border-b border-white/5 py-3 flex flex-col"
                    >
                      {/* Header Item (Clickable) */}
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="flex justify-between items-center w-full text-left group/item focus:outline-none"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm md:text-base font-sans uppercase font-bold transition-colors ${
                              isExpanded
                                ? "text-dom-red"
                                : "text-white/80 group-hover/item:text-white"
                            }`}
                          >
                            {isExpanded ? "> " : ""}
                            {item.name}
                          </span>
                          {item.signature && (
                            <span className="text-dom-red text-lg leading-none animate-pulse">
                              *
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm font-bold text-white/80 group-hover/item:text-white">
                            {item.price}
                          </span>
                          {/* Indikator buka/tutup */}
                          <span className="text-dom-red font-mono text-xs w-4 text-right">
                            {isExpanded ? "[-]" : "[+]"}
                          </span>
                        </div>
                      </button>

                      {/* Konten Accordion (Expandable) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 p-4 border border-dom-red/30 bg-dom-red/2 flex flex-col sm:flex-row gap-4 relative">
                              {/* Aksen UI Scanner */}
                              <div className="absolute top-0 left-0 w-full h-px bg-dom-red opacity-50"></div>

                              <div className="w-full sm:w-1/3 h-32 shrink-0 border border-dom-red/20 relative overflow-hidden">
                                <img
                                  src={item.image_url}
                                  alt={item.name}
                                  className="w-full h-full object-cover filter contrast-125 saturate-50 sepia-[.3] hue-rotate-[-30deg]"
                                />
                                <div className="absolute bottom-1 right-1 bg-dom-black/80 text-dom-red text-[8px] font-mono px-1">
                                  VISUAL_DB
                                </div>
                              </div>

                              <div className="flex flex-col justify-center">
                                <p className="font-mono text-xs text-dom-red/70 mb-2 uppercase">
                                  // Data_Extraction_Complete
                                </p>
                                <p className="text-sm text-white/70 font-sans leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
