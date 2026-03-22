import Icon from "@/components/ui/icon";
import { useState } from "react";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/fa703251-f87d-4ce2-a5fa-ea44172dd82d/files/8448edb7-212f-49ab-ae53-974cb0e3ec28.jpg";
const PRODUCT_IMG =
  "https://cdn.poehali.dev/projects/fa703251-f87d-4ce2-a5fa-ea44172dd82d/files/d3e2ba77-d95e-484d-aa8d-20c06d83f9f1.jpg";
const PRODUCT_OIL_IMG =
  "https://cdn.poehali.dev/projects/fa703251-f87d-4ce2-a5fa-ea44172dd82d/files/cfc1f891-4f87-46a2-98fc-9dea12f847f2.jpg";
const LAB_IMG =
  "https://cdn.poehali.dev/projects/fa703251-f87d-4ce2-a5fa-ea44172dd82d/files/a5d8137a-45b9-43c9-a799-7a86019c8c37.jpg";
const FACTORY_IMG =
  "https://cdn.poehali.dev/projects/fa703251-f87d-4ce2-a5fa-ea44172dd82d/files/925b9de1-fc23-45c3-a696-95dd8edc7f0c.jpg";

const relatedNews = [
  {
    id: 1,
    category: "Технологии",
    title: "Новые стандарты вязкости масел: что изменилось в 2025 году",
    date: "12 марта 2025",
    img: PRODUCT_IMG,
  },
  {
    id: 2,
    category: "Производство",
    title: "Расширение завода MANNOL в Германии: +40% к мощности",
    date: "5 марта 2025",
    img: LAB_IMG,
  },
  {
    id: 3,
    category: "Продукты",
    title: "MANNOL Hybrid 0W-20: масло для гибридных двигателей",
    date: "28 февраля 2025",
    img: FACTORY_IMG,
  },
];

const galleryImages = [
  { src: FACTORY_IMG, alt: "Производственный цех" },
  { src: LAB_IMG, alt: "Лаборатория качества" },
  { src: PRODUCT_IMG, alt: "Линейка продуктов" },
  { src: HERO_IMG, alt: "Завод MANNOL" },
];

export default function Index() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        backgroundColor: "#F5F6FA",
        color: "#1A1A2E",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{ backgroundColor: "#2E2F5B", position: "sticky", top: 0, zIndex: 50 }}
        className="shadow-lg"
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}
          className="flex items-center justify-between h-16"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <div
              style={{
                backgroundColor: "#FFD100",
                borderRadius: 4,
                padding: "4px 10px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: 18,
                color: "#2E2F5B",
                letterSpacing: "0.05em",
              }}
            >
              MANNOL
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Каталог", "Выбор продукта", "Подбор масла", "Новости", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: item === "Новости" ? "#FFD100" : "rgba(255,255,255,0.85)",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: item === "Новости" ? 600 : 500,
                  fontSize: 14,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  borderBottom: item === "Новости" ? "2px solid #FFD100" : "2px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 cursor-pointer">
              {["RU", "DE", "EN"].map((lang, i) => (
                <span
                  key={lang}
                  style={{
                    color: i === 0 ? "#FFD100" : "rgba(255,255,255,0.5)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    padding: "2px 4px",
                    cursor: "pointer",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
            <button
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: 8,
                padding: "8px",
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon name="Search" size={18} />
            </button>
            <button
              className="md:hidden"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: 8,
                padding: "8px",
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name="Menu" size={18} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            style={{
              backgroundColor: "#23245a",
              padding: "16px 24px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {["Каталог", "Выбор продукта", "Подбор масла", "Новости", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* BREADCRUMB */}
      <div className="mannol-breadcrumb-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px" }}>
        <div className="mannol-breadcrumb flex items-center gap-2" style={{ fontSize: 13, color: "#8A8FA8" }}>
          <a href="#" style={{ color: "#8A8FA8", textDecoration: "none" }}>Главная</a>
          <Icon name="ChevronRight" size={14} />
          <a href="#" style={{ color: "#8A8FA8", textDecoration: "none" }}>Новости</a>
          <Icon name="ChevronRight" size={14} />
          <span style={{ color: "#2E2F5B", fontWeight: 500 }}>Производство масел</span>
        </div>
      </div>

      {/* HERO */}
      <div className="mannol-hero-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 40px" }}>
        <div
          className="mannol-hero"
          style={{
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            minHeight: 420,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            src={HERO_IMG}
            alt="Hero"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(46,47,91,0.93) 0%, rgba(46,47,91,0.65) 60%, rgba(46,47,91,0.25) 100%)",
            }}
          />
          <div className="mannol-hero-content" style={{ position: "relative", zIndex: 2, padding: "48px 56px", maxWidth: 640 }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#FFD100",
                color: "#2E2F5B",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 4,
                marginBottom: 20,
              }}
            >
              Производство
            </span>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(22px, 3vw, 38px)",
                color: "#FFFFFF",
                lineHeight: 1.25,
                marginBottom: 24,
                letterSpacing: "-0.01em",
              }}
            >
              Как создаётся моторное масло:<br />
              полный цикл производства<br />
              на заводах MANNOL
            </h1>
            <div className="mannol-hero-meta flex items-center gap-6" style={{ flexWrap: "wrap", gap: 16 }}>
              {[
                { icon: "Calendar", text: "19 марта 2025" },
                { icon: "Clock", text: "8 мин. чтения" },
                { icon: "Eye", text: "4 230 просмотров" },
              ].map((m) => (
                <div key={m.text} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
                  <Icon name={m.icon} size={14} />
                  <span>{m.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="mannol-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 28,
          alignItems: "start",
        }}
      >
        {/* LEFT — ARTICLE */}
        <div className="flex flex-col gap-6">
          {/* Article body */}
          <div
            className="mannol-article-card"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: "40px 48px",
              boxShadow: "0 2px 16px rgba(46,47,91,0.06)",
            }}
          >
            {/* Author row */}
            <div
              className="mannol-article-author flex items-center gap-3"
              style={{
                paddingBottom: 24,
                marginBottom: 32,
                borderBottom: "1px solid #EDEEF5",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "#2E2F5B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFD100",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  flexShrink: 0,
                }}
              >
                АМ
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14, color: "#2E2F5B" }}>
                  Андрей Михайлов
                </div>
                <div style={{ fontSize: 12, color: "#8A8FA8" }}>Технический редактор MANNOL</div>
              </div>
              <div className="mannol-article-author-actions flex items-center gap-2 ml-auto">
                {[
                  { icon: "Share2", label: "Поделиться" },
                  { icon: "Bookmark", label: "Сохранить" },
                ].map((btn) => (
                  <button
                    key={btn.icon}
                    title={btn.label}
                    style={{
                      background: "#F5F6FA",
                      border: "1px solid #EDEEF5",
                      borderRadius: 8,
                      padding: "8px 10px",
                      cursor: "pointer",
                      color: "#2E2F5B",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    <Icon name={btn.icon} size={14} />
                    <span className="hidden sm:inline">{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Lead */}
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "#3D3F5C", marginBottom: 28 }}>
              Производство моторного масла — сложный многоэтапный процесс, требующий высокоточного
              оборудования и строгого контроля качества на каждом этапе. MANNOL — немецкий бренд,
              объединяющий десятилетия инженерного опыта и современные технологии смешивания базовых
              масел и присадок.
            </p>

            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#2E2F5B",
                marginBottom: 16,
              }}
            >
              Базовые масла: фундамент формулы
            </h2>

            <p style={{ fontSize: 15, lineHeight: 1.85, color: "#3D3F5C", marginBottom: 20 }}>
              Всё начинается с выбора базового масла. MANNOL использует три класса основ:
              минеральные, полусинтетические и синтетические (PAO и эстеры). Соотношение компонентов
              определяет вязкостный класс готового продукта.
            </p>

            {/* Bullet list */}
            <ul style={{ marginBottom: 28, paddingLeft: 0, listStyle: "none" }}>
              {[
                "Минеральные базы — для классических двигателей и сервисных масел",
                "Гидрокрекинговые (HC) — повышенная термостабильность при умеренной цене",
                "PAO (полиальфаолефины) — синтетика премиум-класса для современных двигателей",
                "Эстеровые компоненты — максимальная смазывающая способность и экологичность",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{ marginBottom: 12, fontSize: 15, color: "#3D3F5C", lineHeight: 1.65 }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#FFD100",
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Quote block */}
            <div
              style={{
                backgroundColor: "#F8F9FF",
                borderLeft: "4px solid #FFD100",
                borderRadius: "0 10px 10px 0",
                padding: "20px 24px",
                marginBottom: 32,
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#2E2F5B",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                «Качество масла определяется не только базой, но и пакетом присадок.
                Именно здесь MANNOL инвестирует в собственные R&D-разработки, не зависящие
                от сторонних поставщиков.»
              </p>
              <div style={{ marginTop: 12, fontSize: 13, color: "#8A8FA8" }}>
                — Клаус Вернер, главный технолог MANNOL GmbH
              </div>
            </div>

            {/* ─── YELLOW DIVIDER ─── */}
            <div
              style={{
                height: 3,
                backgroundColor: "#FFD100",
                borderRadius: 2,
                margin: "36px 0 32px",
              }}
            />

            {/* ─── RECOMMENDED PRODUCTS ─── */}
            <div style={{ marginBottom: 36 }}>
              {/* Section title */}
              <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#2E2F5B",
                  }}
                >
                  Рекомендуем к этому разделу
                </span>
                <div style={{ flex: 1, height: 1, backgroundColor: "#EDEEF5" }} />
              </div>

              {/* Product cards */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    img: PRODUCT_OIL_IMG,
                    badge: "Минеральное",
                    name: "MANNOL 7715 Special",
                    desc: "Для классических двигателей с пробегом от 100 000 км",
                    api: "API SL/CF · SAE 10W-40",
                  },
                  {
                    img: PRODUCT_IMG,
                    badge: "Полусинтетика",
                    name: "MANNOL 7706 Classic",
                    desc: "Универсальное масло для бензиновых и дизельных двигателей",
                    api: "API SL/CF · SAE 10W-40",
                  },
                  {
                    img: LAB_IMG,
                    badge: "Синтетика",
                    name: "MANNOL 7915 Extreme",
                    desc: "Высокоэффективное масло для форсированных двигателей",
                    api: "API SN/CF · SAE 5W-40",
                  },
                ].map((prod, i) => (
                  <div
                    key={i}
                    className="flex gap-4"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFBFF",
                      border: "1px solid #EDEEF5",
                      borderRadius: 12,
                      padding: "16px 20px",
                      boxShadow: "0 2px 10px rgba(46,47,91,0.05)",
                      alignItems: "center",
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 10,
                        overflow: "hidden",
                        flexShrink: 0,
                        backgroundColor: "#F5F6FA",
                      }}
                    >
                      <img
                        src={prod.img}
                        alt={prod.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="flex items-center gap-2" style={{ marginBottom: 5 }}>
                        <span
                          style={{
                            backgroundColor: "#2E2F5B",
                            color: "#FFD100",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700,
                            fontSize: 10,
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            padding: "2px 8px",
                            borderRadius: 4,
                          }}
                        >
                          {prod.badge}
                        </span>
                        <span style={{ fontSize: 11, color: "#B0B3C8", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                          {prod.api}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          color: "#2E2F5B",
                          marginBottom: 3,
                        }}
                      >
                        {prod.name}
                      </div>
                      <div style={{ fontSize: 13, color: "#5A5C7A", lineHeight: 1.5 }}>
                        {prod.desc}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2 mannol-prod-btns" style={{ flexShrink: 0 }}>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          color: "#2E2F5B",
                          border: "1.5px solid #DDDFE8",
                          borderRadius: 8,
                          padding: "8px 14px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 600,
                          fontSize: 12,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2E2F5B")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#DDDFE8")}
                      >
                        Подробнее →
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFD100",
                          color: "#2E2F5B",
                          border: "none",
                          borderRadius: 8,
                          padding: "8px 14px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: 12,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Купить на Ozon
                      </button>
                      <button
                        style={{
                          backgroundColor: "#7B2FBE",
                          color: "#FFFFFF",
                          border: "none",
                          borderRadius: 8,
                          padding: "8px 14px",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: 12,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Wildberries
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#2E2F5B",
                marginBottom: 16,
              }}
            >
              Пакеты присадок: химия в деталях
            </h2>

            <p style={{ fontSize: 15, lineHeight: 1.85, color: "#3D3F5C", marginBottom: 32 }}>
              Присадки составляют от 15 до 30% состава готового масла. Они обеспечивают моющие
              свойства, защиту от износа, антиокислительную стабильность и совместимость с
              современными системами очистки выхлопных газов (DPF, GPF, SCR).
            </p>

            {/* Video block */}
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <img
                src={FACTORY_IMG}
                alt="Видео о производстве"
                style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(46,47,91,0.52)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#FFD100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 24px rgba(255,209,0,0.45)",
                  }}
                >
                  <Icon name="Play" size={26} />
                </div>
                <span
                  style={{
                    color: "white",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    letterSpacing: "0.02em",
                  }}
                >
                  Смотреть репортаж с завода (4:32)
                </span>
              </div>
            </div>
          </div>

          {/* GALLERY */}
          <div
            className="mannol-gallery-card"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: "32px 40px",
              boxShadow: "0 2px 16px rgba(46,47,91,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#2E2F5B",
                marginBottom: 20,
              }}
            >
              Фотогалерея
            </h3>
            <div
              className="mannol-gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 12,
              }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    aspectRatio: "16/10",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.35s ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLImageElement).style.transform = "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLImageElement).style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(transparent, rgba(46,47,91,0.72))",
                      padding: "20px 12px 10px",
                      pointerEvents: "none",
                    }}
                  >
                    <span style={{ color: "white", fontSize: 12, fontWeight: 500 }}>{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div
            className="mannol-tags-card"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: "20px 40px",
              boxShadow: "0 2px 16px rgba(46,47,91,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 13, color: "#8A8FA8", fontWeight: 500, marginRight: 4 }}>Теги:</span>
            {["Производство", "Моторные масла", "Технологии", "Качество", "MANNOL"].map((tag) => (
              <a
                key={tag}
                href="#"
                style={{
                  backgroundColor: "#F5F6FA",
                  color: "#2E2F5B",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  padding: "6px 14px",
                  borderRadius: 6,
                  textDecoration: "none",
                  border: "1px solid #EDEEF5",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#FFD100";
                  (e.target as HTMLElement).style.color = "#2E2F5B";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#EDEEF5";
                }}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — SIDEBAR */}
        <aside className="flex flex-col gap-6">

          {/* PRODUCT RECOMMENDATION CARD */}
          <div
            className="mannol-sidebar-card"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: "24px",
              boxShadow: "0 2px 20px rgba(46,47,91,0.09)",
              border: "1px solid #EDEEF5",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: 18 }}>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#2E2F5B",
                  marginBottom: 4,
                  display: "inline-block",
                  paddingBottom: 10,
                  borderBottom: "3px solid #FFD100",
                }}
              >
                Рекомендуем к статье
              </h3>
              <p style={{ fontSize: 12, color: "#8A8FA8", marginTop: 10 }}>
                на месте каталога — продукт с кнопками маркетплейсов
              </p>
            </div>

            {/* Product image */}
            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                marginBottom: 16,
                backgroundColor: "#F5F6FA",
                height: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={PRODUCT_OIL_IMG}
                alt="MANNOL Extreme 5W-40"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Product name */}
            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#2E2F5B",
                  color: "#FFD100",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              >
                Моторное масло
              </div>
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: 17,
                  color: "#2E2F5B",
                  lineHeight: 1.25,
                  marginBottom: 6,
                }}
              >
                MANNOL Extreme 5W-40
              </h4>
              <p style={{ fontSize: 13, color: "#5A5C7A", lineHeight: 1.6 }}>
                Для современных бензиновых и дизельных двигателей. API SN/CF · ACEA A3/B4.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2" style={{ marginBottom: 18 }}>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} style={{ color: "#FFD100", fontSize: 14, lineHeight: 1 }}>★</span>
                ))}
              </div>
              <span style={{ fontSize: 12, color: "#8A8FA8" }}>4.9 · 1 280 отзывов</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#2E2F5B",
                  border: "2px solid #EDEEF5",
                  borderRadius: 8,
                  padding: "10px 16px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2E2F5B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#EDEEF5")}
              >
                <Icon name="BookOpen" size={14} />
                Читать подробнее →
              </button>

              <button
                style={{
                  backgroundColor: "#FFD100",
                  color: "#2E2F5B",
                  border: "none",
                  borderRadius: 8,
                  padding: "11px 16px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                }}
              >
                <Icon name="ShoppingCart" size={14} />
                Купить на Ozon
              </button>

              <button
                style={{
                  backgroundColor: "#7B2FBE",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 8,
                  padding: "11px 16px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                }}
              >
                <Icon name="ShoppingBag" size={14} />
                Wildberries
              </button>
            </div>

            <p style={{ fontSize: 11, color: "#B0B3C8", textAlign: "center", marginTop: 10 }}>
              Переход на маркетплейс
            </p>
          </div>

          {/* ALSO INTERESTING */}
          <div
            className="mannol-sidebar-card"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: "24px",
              boxShadow: "0 2px 16px rgba(46,47,91,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#2E2F5B",
                marginBottom: 20,
                display: "inline-block",
                paddingBottom: 10,
                borderBottom: "3px solid #FFD100",
              }}
            >
              Также вам будет интересно
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { title: "5W-30 vs 5W-40: какое масло выбрать для вашего авто?", tag: "Гайд", img: LAB_IMG },
                { title: "Допуски BMW Longlife: что означают и зачем нужны", tag: "Технологии", img: FACTORY_IMG },
                { title: "Топ-5 масел для турбированных двигателей 2025", tag: "Рейтинг", img: PRODUCT_IMG },
              ].map((art, i) => (
                <div
                  key={i}
                  className="flex gap-3"
                  style={{ cursor: "pointer", paddingBottom: i < 2 ? 12 : 0, borderBottom: i < 2 ? "1px solid #EDEEF5" : "none" }}
                >
                  <div
                    style={{
                      borderRadius: 6,
                      overflow: "hidden",
                      flexShrink: 0,
                      width: 64,
                      height: 52,
                    }}
                  >
                    <img src={art.img} alt={art.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        color: "#FFD100",
                        backgroundColor: "#2E2F5B",
                        padding: "2px 7px",
                        borderRadius: 3,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {art.tag}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: 12,
                        color: "#2E2F5B",
                        lineHeight: 1.4,
                        marginTop: 5,
                      }}
                    >
                      {art.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related news */}
          <div
            className="mannol-sidebar-card"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: "28px 24px",
              boxShadow: "0 2px 16px rgba(46,47,91,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#2E2F5B",
                marginBottom: 20,
                display: "inline-block",
                paddingBottom: 10,
                borderBottom: "3px solid #FFD100",
              }}
            >
              По теме
            </h3>
            <div>
              {relatedNews.map((news, i) => (
                <div
                  key={news.id}
                  className="flex gap-3"
                  style={{
                    paddingTop: i === 0 ? 0 : 16,
                    paddingBottom: i === relatedNews.length - 1 ? 0 : 16,
                    borderBottom: i === relatedNews.length - 1 ? "none" : "1px solid #EDEEF5",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      borderRadius: 6,
                      overflow: "hidden",
                      flexShrink: 0,
                      width: 72,
                      height: 56,
                    }}
                  >
                    <img
                      src={news.img}
                      alt={news.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        color: "#FFD100",
                        backgroundColor: "#2E2F5B",
                        padding: "2px 7px",
                        borderRadius: 3,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {news.category}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#2E2F5B",
                        lineHeight: 1.4,
                        marginTop: 6,
                        marginBottom: 4,
                      }}
                    >
                      {news.title}
                    </p>
                    <span style={{ fontSize: 11, color: "#8A8FA8" }}>{news.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download CTA */}
          <div
            className="mannol-sidebar-card"
            style={{
              backgroundColor: "#FFFBE6",
              borderRadius: 12,
              padding: "28px 24px",
              boxShadow: "0 2px 16px rgba(46,47,91,0.06)",
              border: "1px solid rgba(255,209,0,0.25)",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                backgroundColor: "#FFD100",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Icon name="BookOpen" size={22} />
            </div>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#2E2F5B",
                marginBottom: 8,
              }}
            >
              Каталог продуктов 2025
            </h3>
            <p style={{ fontSize: 13, color: "#5A5C7A", lineHeight: 1.65, marginBottom: 20 }}>
              Полная линейка масел MANNOL с допусками, применениями и техническими характеристиками.
            </p>
            <button
              style={{
                backgroundColor: "#2E2F5B",
                color: "#FFD100",
                border: "none",
                borderRadius: 8,
                padding: "12px 20px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <Icon name="Download" size={15} />
              Скачать каталог
            </button>
          </div>

          {/* Stats */}
          <div
            className="mannol-sidebar-card"
            style={{
              backgroundColor: "#2E2F5B",
              borderRadius: 12,
              padding: "28px 24px",
              boxShadow: "0 2px 16px rgba(46,47,91,0.12)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: "#FFD100",
                marginBottom: 20,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              MANNOL в цифрах
            </h3>
            {[
              { value: "170+", label: "стран дистрибуции" },
              { value: "2 500+", label: "наименований продуктов" },
              { value: "30 лет", label: "на рынке автохимии" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.09)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: 24,
                    color: "#FFD100",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.6)",
                    textAlign: "right",
                    maxWidth: 120,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* CTA SUBSCRIPTION */}
      <div className="mannol-sub-outer" style={{ padding: "0 24px 60px" }}>
        <div
          className="mannol-cta"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: "48px 56px",
            border: "2px solid #EDEEF5",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
            boxShadow: "0 2px 16px rgba(46,47,91,0.06)",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#FFD100",
                padding: "5px 13px",
                borderRadius: 6,
                marginBottom: 16,
              }}
            >
              <Icon name="Bell" size={13} />
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 10,
                  color: "#2E2F5B",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Рассылка новостей
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: 26,
                color: "#2E2F5B",
                marginBottom: 12,
                lineHeight: 1.25,
              }}
            >
              Будьте в курсе инноваций MANNOL
            </h2>
            <p style={{ fontSize: 14, color: "#5A5C7A", lineHeight: 1.75 }}>
              Получайте первыми информацию о новых продуктах, технических обновлениях
              и специальных предложениях для партнёров.
            </p>
          </div>
          <div>
            <div className="mannol-sub-form flex gap-3" style={{ marginBottom: 10 }}>
              <input
                type="email"
                placeholder="Ваш email адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: "13px 16px",
                  borderRadius: 8,
                  border: "2px solid #EDEEF5",
                  fontSize: 14,
                  color: "#2E2F5B",
                  outline: "none",
                  fontFamily: "'Open Sans', sans-serif",
                  backgroundColor: "#F5F6FA",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#FFD100")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#EDEEF5")}
              />
              <button
                style={{
                  backgroundColor: "#2E2F5B",
                  color: "#FFD100",
                  border: "none",
                  borderRadius: 8,
                  padding: "13px 22px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Подписаться
              </button>
            </div>
            <p style={{ fontSize: 12, color: "#8A8FA8" }}>
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности MANNOL
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mannol-footer-outer" style={{ backgroundColor: "#2E2F5B", padding: "56px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="mannol-footer"
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr 1fr 1fr",
              gap: 48,
              paddingBottom: 48,
              borderBottom: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div>
              <div
                style={{
                  backgroundColor: "#FFD100",
                  borderRadius: 4,
                  padding: "5px 12px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#2E2F5B",
                  display: "inline-block",
                  marginBottom: 16,
                }}
              >
                MANNOL
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
                Немецкое качество смазочных материалов для любого двигателя и любых условий.
              </p>
              <div className="flex gap-2">
                {["Youtube", "Instagram", "Linkedin"].map((s) => (
                  <button
                    key={s}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    <Icon name={s} size={15} fallback="Globe" />
                  </button>
                ))}
              </div>
            </div>

            {[
              {
                title: "Продукты",
                links: ["Моторные масла", "Трансмиссионные масла", "Антифризы", "Автохимия", "Смазки"],
              },
              {
                title: "Компания",
                links: ["О MANNOL", "Производство", "Сертификаты", "Карьера", "Партнёры"],
              },
              {
                title: "Поддержка",
                links: ["Подбор масла", "FAQ", "Контакты", "Дистрибьюторы", "Пресс-центр"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    color: "#FFD100",
                    marginBottom: 18,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {col.title}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link} style={{ marginBottom: 10 }}>
                      <a
                        href="#"
                        style={{
                          color: "rgba(255,255,255,0.55)",
                          fontSize: 13,
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFD100")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mannol-footer-bottom flex items-center justify-between"
            style={{ paddingTop: 28, flexWrap: "wrap", gap: 12 }}
          >
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              © 2025 MANNOL GmbH & Co. KG. Все права защищены.
            </span>
            <div className="mannol-footer-links flex gap-6" style={{ flexWrap: "wrap", gap: 16 }}>
              {["Политика конфиденциальности", "Условия использования", "Правовая информация"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.3)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        /* ── Tablet 768px ── */
        @media (max-width: 900px) {
          .mannol-grid {
            grid-template-columns: 1fr !important;
          }
          .mannol-cta {
            grid-template-columns: 1fr !important;
            padding: 32px 28px !important;
            gap: 28px !important;
          }
          .mannol-footer {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }

        /* ── Global box-sizing ── */
        * { box-sizing: border-box; }

        /* ── Mobile 360px ── */
        @media (max-width: 480px) {
          /* Layout */
          .mannol-grid {
            padding: 0 12px 40px !important;
            gap: 16px !important;
          }
          .mannol-breadcrumb-wrap {
            padding: 10px 12px !important;
          }
          .mannol-cta {
            padding: 24px 16px !important;
            gap: 20px !important;
          }
          .mannol-footer {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }

          /* Hero */
          .mannol-hero-wrap {
            padding: 0 12px 24px !important;
          }
          .mannol-hero {
            min-height: 280px !important;
            border-radius: 10px !important;
          }
          .mannol-hero-content {
            padding: 24px 20px !important;
            max-width: 100% !important;
          }
          .mannol-hero-meta {
            gap: 10px !important;
          }

          /* Article card */
          .mannol-article-card {
            padding: 24px 16px !important;
            border-radius: 10px !important;
          }
          .mannol-article-author {
            flex-wrap: wrap !important;
            gap: 8px !important;
          }
          .mannol-article-author-actions {
            margin-left: 0 !important;
            width: 100% !important;
            justify-content: flex-start !important;
          }

          /* Gallery */
          .mannol-gallery-card {
            padding: 20px 16px !important;
            border-radius: 10px !important;
          }
          .mannol-gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }

          /* Tags */
          .mannol-tags-card {
            padding: 16px !important;
          }

          /* Sidebar */
          .mannol-sidebar-card {
            padding: 20px 16px !important;
            border-radius: 10px !important;
          }

          /* Subscription */
          .mannol-sub-form {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .mannol-sub-form input {
            width: 100% !important;
          }
          .mannol-sub-form button {
            width: 100% !important;
            text-align: center !important;
          }

          /* Footer */
          .mannol-footer-outer {
            padding: 36px 12px 24px !important;
          }
          .mannol-footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .mannol-footer-links {
            flex-direction: column !important;
            gap: 8px !important;
          }
          /* Subscription outer */
          .mannol-sub-outer {
            padding: 0 12px 36px !important;
          }

          /* Breadcrumb */
          .mannol-breadcrumb {
            padding: 12px !important;
            font-size: 11px !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
          }

          /* CTA subscription headline */
          .mannol-cta h2 {
            font-size: 20px !important;
          }
        }

        /* ── Tablet-only 480px–900px tweaks ── */
        @media (min-width: 481px) and (max-width: 900px) {
          .mannol-hero-wrap {
            padding: 0 16px 28px !important;
          }
          .mannol-hero {
            min-height: 340px !important;
          }
          .mannol-hero-content {
            padding: 32px 36px !important;
            max-width: 90% !important;
          }
          .mannol-article-card {
            padding: 28px 28px !important;
          }
          .mannol-gallery-card {
            padding: 24px 24px !important;
          }
          .mannol-tags-card {
            padding: 16px 24px !important;
          }
          .mannol-sidebar-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}