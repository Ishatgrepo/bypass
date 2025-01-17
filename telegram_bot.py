from telegram.ext import Updater, CommandHandler, MessageHandler, filters
from telegram import Update
import logging
from bypass_shortlink import bypass_shortlink  # Import the bypass function

# Enable logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO
)

logger = logging.getLogger(__name__)

TOKEN = '7633587711:AAF9feQ2vAWHdAHbfrOmaiey6q58bR0udi0'  # Replace with your token

def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Hello! Send me a short URL to bypass.")

def bypass_url(update, context):
    if len(context.args) == 0:
        context.bot.send_message(chat_id=update.effective_chat.id, text="Please provide a URL to bypass.")
    else:
        url = context.args[0]
        result = bypass_shortlink(url)
        context.bot.send_message(chat_id=update.effective_chat.id, text=result)

def main():
    updater = Updater(TOKEN, use_context=True)

    dispatcher = updater.dispatcher

    start_handler = CommandHandler('start', start)
    dispatcher.add_handler(start_handler)

    bypass_handler = CommandHandler('bypass', bypass_url)
    dispatcher.add_handler(bypass_handler)

    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
