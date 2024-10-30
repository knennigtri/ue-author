import { decorateIcons } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  let navPath = window.wknd.demoConfig.demoBase || '';
  // TODO Fix
  navPath = 'https://author-p140373-e1482158.adobeaemcloud.com/content/wknd-ue-1';

  const resp = await fetch(`${navPath}/footer.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});
  if (resp.ok) {
    block.textContent = '';

    const html = await resp.text();
    const footer = document.createElement('div');
    footer.innerHTML = html;
    await decorateIcons(footer);

    const classes = ['brand', 'nav', 'follow', 'disc'];
    let f = footer.firstElementChild;
    while (f && classes.length) {
      f.classList.add(classes.shift());
      f = f.nextElementSibling;
    }
    block.append(footer);
  }
}
