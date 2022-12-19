import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import { COMMANDS } from './constants/commands';
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.help(async (ctx) => {
  let msg = 'COMANDOS DISPONÍVEIS 🥵\n';

  for (const command in COMMANDS) {
    msg += `- /${COMMANDS[command]}\n`;
  }

  await ctx.reply(msg);
});

bot.command('calvo', async (ctx) => {
  await ctx.reply(`Olá ${ctx.message.from.first_name}`);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
