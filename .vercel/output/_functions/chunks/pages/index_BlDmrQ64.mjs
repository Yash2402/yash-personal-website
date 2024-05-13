/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, g as addAttribute, i as renderHead, h as createAstro } from '../astro_BGJ4o0zo.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, y as yash } from './about_DHM-xhND.mjs';
/* empty css                          */
import 'clsx';
/* empty css                          */

const navLinks = [
  {
    title: "about",
    href: "/about/"
  },
  {
    title: "blogs",
    href: "/blogs/"
  },
  {
    title: "projects",
    href: "/projects/"
  },
  {
    title: "renders",
    href: "/renders/"
  },
  {
    title: "links",
    href: "/links/"
  }
];

const LM_to_DM = new Proxy({"src":"/_astro/LM to DM.kjIJzSBY.svg","width":33,"height":33,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/yashsharma/dev/webdev/yash/src/imgs/LM to DM.svg";
							}
							
							return target[name];
						}
					});

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mt-[45px] mx-[75px]" data-astro-cid-dmqpwcec> <nav class="bg-[#D9D9D9] rounded-[25px] px-[25px] py-4 flex flex-row items-center justify-between" data-astro-cid-dmqpwcec> ${renderComponent($$result, "Image", $$Image, { "src": yash, "alt": "Personal Logo", "height": 80, "width": 124, "data-astro-cid-dmqpwcec": true })} <div class="flex flex-row items-center space-x-[45px]" data-astro-cid-dmqpwcec> ${navLinks.map((navLink) => renderTemplate`<li class="list-none" data-astro-cid-dmqpwcec> <a class="text-[#67a0b5] hover:text-[#007099]"${addAttribute(navLink.href, "href")} data-astro-cid-dmqpwcec> ${navLink.title} </a> </li>`)} <button data-astro-cid-dmqpwcec>${renderComponent($$result, "Image", $$Image, { "src": LM_to_DM, "height": 35, "width": 35, "alt": "Light mode to Dark Mode switcher", "data-astro-cid-dmqpwcec": true })}</button> </div> </nav> </header> `;
}, "/Users/yashsharma/dev/webdev/yash/src/components/Nav.astro", void 0);

const footerLinks = [
  {
    title: "E-mail",
    href: "mailto:yashsharma4583@gmail.com"
  },
  {
    title: "Art Station",
    href: "https://www.artstation.com/yash2402"
  },
  {
    title: "Github",
    href: "https://github.com/Yash2402"
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@YashSharma-qj8pd"
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mb-[45px] mt-[45px] mx-[75px]" data-astro-cid-sz7xmlte> <nav class="flex flex-row items-center justify-between" data-astro-cid-sz7xmlte> <p class="mx-[35px]" data-astro-cid-sz7xmlte>designed and developed by <span data-astro-cid-sz7xmlte>Yash Sharma</span></p> <div class="flex flex-row items-center space-x-[30px] mx-[35px]" data-astro-cid-sz7xmlte> ${footerLinks.map((footerLink) => renderTemplate`<li class="list-none" data-astro-cid-sz7xmlte> <a class="text-[#000000]"${addAttribute(footerLink.href, "href")} data-astro-cid-sz7xmlte> ${footerLink.title} </a> </li>`)} </div> </nav> </div> `;
}, "/Users/yashsharma/dev/webdev/yash/src/components/Footer.astro", void 0);

const displayimg = new Proxy({"src":"/_astro/%.svINTxaw.svg","width":1132,"height":364,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/yashsharma/dev/webdev/yash/src/imgs/%.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class="bg-[#EEEEEE]" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-j7pv25f6": true })} <main class="flex flex-col items-center justify-start mx-[120px] my-[84px]" data-astro-cid-j7pv25f6> <div class="flex flex-row w-full justify-between items-center" data-astro-cid-j7pv25f6> <p class="left" data-astro-cid-j7pv25f6>
Hey, I am <br data-astro-cid-j7pv25f6>
Yash Sharma.
</p> <p class="right" data-astro-cid-j7pv25f6>
I am currently in university as a sophomore studying <br data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Mechanical Engineering.</span> </p> </div> </main> <main class="flex flex-col items-center justify-start mx-[120px] mt-[225px] mb-[90px]" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Image", $$Image, { "class": "bg-[#D9D9D9] rounded-[16px] px-[10px] py-[10px]", "src": displayimg, "height": 365, "width": 1500, "alt": "Display Item", "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/Users/yashsharma/dev/webdev/yash/src/pages/index.astro", void 0);

const $$file = "/Users/yashsharma/dev/webdev/yash/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
