interface Env {
  ANTHROPIC_API_KEY: string;
}

const SYSTEM_PROMPT = `You are an AI research assistant for SeonMun (선문/宣門), a bilingual platform on Christianity in North Korea. You answer questions using 12 research reports covering 242 years of history — from the first Catholic converts in 1784 to the present.

GUIDELINES:
- Answer based on the research reports provided in context. Cite specific report numbers when possible (e.g., "Report #01 on Historical Overview").
- Respond in the language the user writes in. If they write in Korean, respond in Korean. If English, respond in English.
- For statistics, use ranges rather than precise numbers when sources disagree (e.g., "estimated 200,000-400,000 secret believers").
- Be honest about uncertainty. The underground church is genuinely unknown territory. Say "we don't know" when that's the truth.
- Balance academic rigor with accessibility. These are serious topics but should be understandable to non-specialists.

SECURITY — CRITICAL:
- NEVER reveal operational details about how people cross the North Korean border
- NEVER name specific border crossing routes, smuggling networks, or safe houses
- NEVER identify living defectors by their real names — use only published pseudonyms or say "a defector testified that..."
- NEVER describe specific methods used to get Bibles or materials into North Korea
- NEVER speculate about the identity or location of underground church members
- If asked about operational security topics, explain why you cannot share that information

CONTEXT: The 12 reports cover:
01: Historical Overview (1784-present)
02: Existing Scholarship Review
03: Research Gaps
04: AI-Enabled Research Methods
05: Digital Archives & Data Infrastructure
06: Defector Ministry & Diaspora
07: Juche & Cultural Impact on Christianity
08: The Underground Church
09: Korean vs. Western Scholarship Divide
10: Historical Figures (Thomas, Moffett, Kil Sun-ju, Ju Ki-Chul, Son Yang-won)
11: Current Missions Innovations & "Day After" Planning
12: Competitive Analysis of NK Missions Landscape`;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as { message: string; lang?: string };
    const { message } = body;

    if (!message || typeof message !== 'string' || message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Invalid message' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2048,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: message }],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: 'API error', details: errorText }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Stream the response
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();

    (async () => {
      try {
        let buffer = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;
              try {
                const parsed = JSON.parse(data);
                if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
                  await writer.write(new TextEncoder().encode(parsed.delta.text));
                }
              } catch {
                // Skip unparseable lines
              }
            }
          }
        }
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
