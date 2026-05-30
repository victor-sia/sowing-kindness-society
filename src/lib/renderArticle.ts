import type { Section } from './articles';

export function renderSection(s: Section): string {
  switch(s.type) {
    case 'h2': return `<h2 class="article-h2">${s.content}</h2>`;
    case 'h3': return `<h3 class="article-h3">${s.content}</h3>`;
    case 'p':  return `<p class="article-p">${s.content}</p>`;
    case 'tip':return `<div class="article-tip"><p>${s.content}</p></div>`;
    case 'quote': return `<blockquote class="article-quote"><p>“${s.content}”</p>${s.cite ? `<cite>— ${s.cite}</cite>` : ''}</blockquote>`;
    case 'cta': return `<div class="article-cta"><p>${s.content}</p><a href="/submit/" class="btn btn-primary">Submit Your Video <span class="chev">›</span></a></div>`;
    case 'ul': return `<ul class="article-ul">${(s.items||[]).map((item:string) => `<li>${item}</li>`).join('')}</ul>`;
    case 'ol': return `<ol class="article-ol">${(s.items||[]).map((item:string,j:number) => `<li>${item}</li>`).join('')}</ol>`;
    default: return '';
  }
}
