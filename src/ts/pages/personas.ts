import { getLang } from '../i18n';

const personaFiles = ['robert_thomas', 'samuel_moffett', 'kil_sunju', 'ju_kichul', 'son_yangwon', 'composite_defector'];

// Map both file-based keys AND JSON id values to loaders
const personaLoaders: Record<string, () => Promise<any>> = {
  'robert_thomas': () => import('../../data/personas/robert_thomas.json'),
  'thomas': () => import('../../data/personas/robert_thomas.json'),
  'samuel_moffett': () => import('../../data/personas/samuel_moffett.json'),
  'moffett': () => import('../../data/personas/samuel_moffett.json'),
  'kil_sunju': () => import('../../data/personas/kil_sunju.json'),
  'kil-sunju': () => import('../../data/personas/kil_sunju.json'),
  'ju_kichul': () => import('../../data/personas/ju_kichul.json'),
  'ju-kichul': () => import('../../data/personas/ju_kichul.json'),
  'son_yangwon': () => import('../../data/personas/son_yangwon.json'),
  'son-yangwon': () => import('../../data/personas/son_yangwon.json'),
  'composite_defector': () => import('../../data/personas/composite_defector.json'),
  'composite-defector': () => import('../../data/personas/composite_defector.json'),
};

export async function renderPersonaGallery(app: HTMLElement): Promise<void> {
  const lang = getLang();
  app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Loading personas...</div>`;

  const personas: any[] = [];
  for (const id of personaFiles) {
    try {
      const mod = await personaLoaders[id]();
      personas.push(mod.default || mod);
    } catch { /* skip unavailable */ }
  }

  const categories: Record<string, string> = {
    'missionary-pioneers': lang === 'ko' ? '선교 개척자' : 'Missionary Pioneers',
    'korean-martyrs': lang === 'ko' ? '한국 순교자' : 'Korean Martyrs',
    'modern-voices': lang === 'ko' ? '현대의 목소리' : 'Modern Voices',
  };

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '역사적 대화' : 'Historical Conversations'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '한국 기독교 역사의 핵심 인물 6인과 대화하세요. 각 인물은 실제 저작과 역사적 기록에 근거하여 응답합니다.' : 'Chat with 6 key figures from Korean Christian history. Each responds in character, grounded in their actual writings and historical records.'}</p>

        <div class="grid-auto">
          ${personas.map(p => `
            <a href="#/personas/${p.id}" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
              <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">${(categories[p.category] || p.category).toUpperCase()}</div>
              <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-xs);">${lang === 'ko' ? p.name.ko : p.name.en}</h3>
              <div style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-tertiary); margin-bottom: var(--space-md);">${p.dates}</div>
              <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${lang === 'ko' ? p.role.ko : p.role.en}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function renderPersonaChat(app: HTMLElement, personaId: string): Promise<void> {
  const lang = getLang();
  app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Loading persona...</div>`;

  let persona: any;
  try {
    const loader = personaLoaders[personaId];
    if (!loader) throw new Error('Persona not found');
    const mod = await loader();
    persona = mod.default || mod;
  } catch {
    app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Persona not found.</div>`;
    return;
  }

  const name = lang === 'ko' ? persona.name.ko : persona.name.en;
  const starters = persona.starters || [];

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="chat-container">
          <a href="#/personas" style="color: var(--text-secondary); font-size: var(--text-sm); display: inline-block; margin-bottom: var(--space-lg);">${lang === 'ko' ? '← 인물 목록으로' : '← Back to Personas'}</a>
          <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-xs);">${name}</h1>
          <p style="color: var(--text-tertiary); font-family: var(--font-mono); font-size: var(--text-sm); margin-bottom: var(--space-sm);">${persona.dates}</p>
          <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">${lang === 'ko' ? persona.role.ko : persona.role.en}</p>

          ${persona.id === 'composite_defector' ? `<p style="color: var(--color-warning); font-size: var(--text-sm); margin-bottom: var(--space-lg);">${lang === 'ko' ? '참고: 이것은 실제 개인이 아닌 익명화된 합성 목소리입니다.' : 'Note: This is an anonymized composite voice, not a single real person.'}</p>` : ''}

          <!-- Conversation starters -->
          <div class="suggested-questions">
            ${starters.map((s: any) => `<button class="suggested-q">${lang === 'ko' ? s.ko : s.en}</button>`).join('')}
          </div>

          <hr class="crack-light-sm">

          <div class="chat-messages" id="chat-messages"></div>

          <div class="chat-input-row">
            <input type="text" class="chat-input" id="chat-input" placeholder="${lang === 'ko' ? `${name}에게 질문하세요...` : `Ask ${name}...`}">
            <button class="btn-ember" id="chat-send">${lang === 'ko' ? '전송' : 'Send'}</button>
          </div>
        </div>
      </div>
    </section>
  `;

  // Chat logic
  const messages = document.getElementById('chat-messages')!;
  const input = document.getElementById('chat-input') as HTMLInputElement;
  const send = document.getElementById('chat-send')!;

  async function sendMsg(text: string) {
    messages.innerHTML += `<div class="chat-message user">${escapeHtml(text)}</div>`;
    input.value = '';
    input.disabled = true;

    const thinkingId = `t-${Date.now()}`;
    messages.innerHTML += `<div class="chat-message assistant" id="${thinkingId}" style="color: var(--text-secondary);">${lang === 'ko' ? '응답 준비 중...' : 'Preparing response...'}</div>`;
    messages.scrollTop = messages.scrollHeight;

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `[Speaking as ${persona.name.en}] ${persona.systemPrompt}\n\nUser: ${text}`, lang }),
      });

      const el = document.getElementById(thinkingId);
      if (!response.ok) {
        if (el) el.innerHTML = lang === 'ko' ? '현재 오프라인입니다.' : 'Currently offline. The API may not be configured yet.';
        input.disabled = false;
        return;
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let full = '';
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          full += decoder.decode(value, { stream: true });
          if (el) el.innerHTML = full;
        }
      }
    } catch {
      const el = document.getElementById(thinkingId);
      if (el) el.innerHTML = lang === 'ko' ? 'API에 연결할 수 없습니다.' : 'Unable to connect to the API.';
    }

    input.disabled = false;
    input.focus();
    messages.scrollTop = messages.scrollHeight;
  }

  send.addEventListener('click', () => { const t = input.value.trim(); if (t) sendMsg(t); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { const t = input.value.trim(); if (t) sendMsg(t); } });
  document.querySelector('.suggested-questions')?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.suggested-q');
    if (btn) sendMsg(btn.textContent || '');
  });
}

function escapeHtml(t: string): string {
  const d = document.createElement('div');
  d.textContent = t;
  return d.innerHTML;
}
