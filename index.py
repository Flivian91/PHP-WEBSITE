from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time

# Function to send message to a contact
def send_message(driver, contact, message):
    try:
        # Wait for search box to be clickable
        search_box = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//div[@contenteditable="true"][@data-tab="3"]')))
        
        # Input contact in search box
        search_box.clear()  # Clear any existing text
        search_box.send_keys(contact)
        
        # Wait for the contact to appear in the list
        contact_element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, f'//span[@title="{contact}"]')))
        
        # Click on the contact
        contact_element.click()
        
        # Wait for the message box to be clickable
        message_box = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//div[@contenteditable="true"][@data-tab="1"]')))
        
        # Input message in the message box
        message_box.send_keys(message)
        message_box.send_keys(Keys.RETURN)
        
        print(f"Message sent to {contact}: {message}")
    except Exception as e:
        print(f"Error sending message to {contact}: {e}")

# Read contacts and messages from Excel
try:
    df = pd.read_excel(r'C:\Users\Flivian\Desktop\PHP WEBSITE\contacts.xlsx', header=None, names=['Contact', 'Message'])  # Update with your Excel file path
    print("DataFrame:")
    print(df)
except Exception as e:
    print("An error occurred while reading the Excel file:", e)
    exit()

# Provide the path to the Chrome WebDriver executable
chrome_driver_path = r'C:\Users\Flivian\Desktop\PHP WEBSITE\msedgedriver.exe'  # Update with the path to your chromedriver executable

# Start Chrome WebDriver
try:
    driver = webdriver.Chrome(executable_path=chrome_driver_path)
except Exception as e:
    print("An error occurred while initializing the Microsoft Edge WebDriver:", e)
    exit()

# Open WhatsApp Web
driver.get("https://web.whatsapp.com/")
print("Scan QR code and press Enter")
input("Press Enter after scanning QR code...")

# Add a wait time to ensure the page loads properly after logging in
time.sleep(10)

# Iterate over each contact and send the corresponding message
for _, row in df.iterrows():
    contact = str(row['Contact'])
    message = str(row['Message'])
    send_message(driver, contact, message)

# Close the browser
driver.quit()
