import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  phone: string;
  date: string;
  guests: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Missing Telegram credentials");
      return new Response(
        JSON.stringify({ error: "Telegram не настроен" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, phone, date, guests }: BookingRequest = await req.json();

    console.log("Received booking request:", { name, phone, date, guests });

    // Validate input
    if (!name || !phone || !date || !guests) {
      return new Response(
        JSON.stringify({ error: "Все поля обязательны" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format message for Telegram
    const message = `
🏰 *Новая заявка на бронирование!*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📅 *Дата:* ${date}
👥 *Гостей:* ${guests}

---
_Dvorets Dzzotti_
    `.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const telegramResult = await telegramResponse.json();
    console.log("Telegram response:", telegramResult);

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramResult);
      return new Response(
        JSON.stringify({ error: "Ошибка отправки в Telegram" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Заявка отправлена" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Внутренняя ошибка сервера" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
