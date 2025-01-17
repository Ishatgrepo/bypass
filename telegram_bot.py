import logging
from telegram.ext import (
    Updater, CommandHandler, MessageHandler, Filters,
    CallbackQueryHandler, CallbackContext, InlineKeyboardMarkup, InlineKeyboardButton
)
import requests
import subprocess
import speedtest
from pymongo import MongoClient
import os

# Enable logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO
)

logger = logging.getLogger(__name__)

# Your API Token from BotFather
TOKEN = 'YOUR_API_TOKEN_HERE'

# MongoDB Connection (adjust as necessary)
MONGO_URI = 'mongodb://localhost:27017/'
DATABASE_NAME = 'telegram_bot'
COLLECTION_NAME = 'messages'

# Log Channel ID (where logs will be sent)
LOG_CHANNEL_ID = '@your_log_channel_username' or 'log_channel_id_here'

def start(update, context):
    """Send a message when the command /start is issued."""
    keyboard = [
        [InlineKeyboardButton("Speedtest", callback_data='speedtest'),
         InlineKeyboardButton("Shell", callback_data='shell')],
        [InlineKeyboardButton("Reboot", callback_data='reboot'),
         InlineKeyboardButton("Logs", callback_data='logs')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_message(chat_id=update.effective_chat.id, text='Choose an action:', reply_markup=reply_markup)

def button_click(update, context):
    """Handle button clicks."""
    query = update.callback_query
    query.answer()
    data = query.data
    
    if data == 'speedtest':
        query.edit_message_text(text="Running speedtest...")
        try:
            s = speedtest.Speedtest()
            s.get_servers()
            s.get_best_server()
            download = s.download() / 1e6
            upload = s.upload() / 1e6
            query.edit_message_text(f"Download: {download:.2f} Mbps\nUpload: {upload:.2f} Mbps")
        except Exception as e:
            query.edit_message_text(f"Error: {e}")
            
    elif data == 'shell':
        query.edit_message_text('Send a message with the shell command to execute.')
        def shell_command(update, context):
            try:
                output = subprocess.check_output(update.message.text, shell=True).decode('utf-8')
                context.bot.send_message(chat_id=update.effective_chat.id, text=f"Output:\n{output}")
            except Exception as e:
                context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error: {e}")
            # Remove the temporary handler
            context.dispatcher.remove_handler(shell_handler)
        shell_handler = MessageHandler(Filters.text & ~Filters.command, shell_command)
        context.dispatcher.add_handler(shell_handler)
        
    elif data == 'reboot':
        query.edit_message_text('Rebooting...')
        try:
            # This requires proper privileges and is dangerous if misused
            subprocess.call(['sudo', 'reboot'])
        except Exception as e:
            query.edit_message_text(f"Error: {e}")
            
    elif data == 'logs':
        # Send logs to the log channel
        with open('python.log', 'r') as f:
            log_content = f.read()
        context.bot.send_message(chat_id=LOG_CHANNEL_ID, text=log_content)

def mongo_interaction(update, context):
    """Basic MongoDB interaction."""
    client = MongoClient(MONGO_URI)
    db = client[DATABASE_NAME]
    collection = db[COLLECTION_NAME]
    
    def store_message(update, context):
        message = update.message.text
        collection.insert_one({"message": message})
        context.bot.send_message(chat_id=update.effective_chat.id, text="Message stored.")
        
    def retrieve_message(update, context):
        messages = collection.find()
        for message in messages:
            context.bot.send_message(chat_id=update.effective_chat.id, text=message['message'])
            
    if update.message.text.startswith('/store'):
        store_message(update, context)
    elif update.message.text.startswith('/retrieve'):
        retrieve_message(update, context)

def log_to_channel(update, context):
    """Log updates to the log channel."""
    logger.info(update)
    context.bot.send_message(chat_id=LOG_CHANNEL_ID, text=str(update))

def main():
    """Start the bot."""
   
