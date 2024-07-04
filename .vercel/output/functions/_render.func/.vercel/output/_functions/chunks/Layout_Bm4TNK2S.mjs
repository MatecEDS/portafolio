import { k as createComponent, l as renderTemplate, m as maybeRenderHead, s as spreadAttributes, q as renderSlot, o as createAstro, p as renderComponent, n as addAttribute, t as renderHead } from './astro/server_L_5f19uS.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import 'clsx';

const $$Astro$3 = createAstro();
const $$PillButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PillButton;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} class="rounded-full border flex justify-center items-center
    y-2 px-5 text-nowrap md:min-w-36 bg-green hover:scale-125 hover:bg-white/50 transition" data-astro-cid-oivgcgu6> <h5 class="" data-astro-cid-oivgcgu6> ${renderSlot($$result, $$slots["default"])} </h5> </a> `;
}, "C:/Users/m-esp/OneDrive/Desktop/Proyectos/astro/portafolio/src/components/Pill_Button.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-hpnw4vwy> <div class="flex px-10 justify-around" data-astro-cid-hpnw4vwy> <div class="py-4" data-astro-cid-hpnw4vwy> <img src="../logo.svg" class="w-10" data-astro-cid-hpnw4vwy> </div> <nav class="flex gap-x-4 md:gap-10 transition text-1xl justify-center items-center" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "PillButton", $$PillButton, { "href": "/", "data-astro-cid-hpnw4vwy": true }, { "default": ($$result2) => renderTemplate`Inicio` })} ${renderComponent($$result, "PillButton", $$PillButton, { "href": "/projects", "data-astro-cid-hpnw4vwy": true }, { "default": ($$result2) => renderTemplate`Proyectos` })} ${renderComponent($$result, "PillButton", $$PillButton, { "href": "/about", "data-astro-cid-hpnw4vwy": true }, { "default": ($$result2) => renderTemplate`Sobre mi` })} </nav> </div> </header> `;
}, "C:/Users/m-esp/OneDrive/Desktop/Proyectos/astro/portafolio/src/components/header.astro", void 0);

const $$Astro$2 = createAstro();
const $$FooterButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FooterButton;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} class="bg-[#00ff00] text-black rounded-full border flex justify-center items-center
    y-2 px-5 text-nowrap md:min-w-36 bg-green hover:scale-125 hover:bg-[#00ff00]/90 transition" data-astro-cid-vd5rfwhz> <h5 class="" data-astro-cid-vd5rfwhz> ${renderSlot($$result, $$slots["default"])} </h5> </a> `;
}, "C:/Users/m-esp/OneDrive/Desktop/Proyectos/astro/portafolio/src/components/footer_button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-k2f5zb5c> <div class="flex-col px-10 justify-around" data-astro-cid-k2f5zb5c> <div class="flex justify-center" data-astro-cid-k2f5zb5c> <img src="../logo.svg" class="w-10" data-astro-cid-k2f5zb5c> </div> <nav class="flex gap-x-4 md:gap-10 transition text-1xl justify-center items-center py-4" data-astro-cid-k2f5zb5c> ${renderComponent($$result, "PillButton", $$FooterButton, { "href": "https://www.linkedin.com/in/antonio-trujillo-b43691315/", "target": "_blank", "data-astro-cid-k2f5zb5c": true }, { "default": ($$result2) => renderTemplate`Linkedin` })} ${renderComponent($$result, "PillButton", $$FooterButton, { "href": "https://www.instagram.com/tony.22tr/", "target": "_blank", "data-astro-cid-k2f5zb5c": true }, { "default": ($$result2) => renderTemplate`Instagram` })} ${renderComponent($$result, "PillButton", $$FooterButton, { "href": "mailto:tony.trujillo.2210@gmail.com", "target": "_blank", "data-astro-cid-k2f5zb5c": true }, { "default": ($$result2) => renderTemplate`Contacto
` })}</nav> </div> <div class="flex justify-center items-center" data-astro-cid-k2f5zb5c> <img src="../favicon.svg" class="w-10" data-astro-cid-k2f5zb5c> <h1 data-astro-cid-k2f5zb5c>Pagina realizada con Astro.</h1> </div> </footer> `;
}, "C:/Users/m-esp/OneDrive/Desktop/Proyectos/astro/portafolio/src/components/footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <main> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "C:/Users/m-esp/OneDrive/Desktop/Proyectos/astro/portafolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
