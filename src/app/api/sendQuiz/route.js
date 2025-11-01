export async function POST(req) {
  const TELEGRAM_BOT_TOKEN = "8023354314:AAEGy1Jlysq2DgvD6vAtcaN3Y4qzqBFPNB0";
  const TELEGRAM_CHAT_ID = "-1002757088472";

  const data = await req.json();

  const message = `
💬 Новая заявка из квиза (Эдем):

Имя: ${data.name}
Возраст: ${data.age || "Не указано"}
Опыт: ${data.experience || "Не указано"}
График: ${data.schedule || "Не указано"}
Часов в неделю: ${data.hours || 0}
Доход: ${data.income || 0} ₽
Telegram: ${data.telegram}
`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!res.ok) throw new Error("Telegram API Error");

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
