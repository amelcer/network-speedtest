from speedtester import SpeedTester
from decouple import config
import requests
#import os

# TO FIX
# doesn't see os env
#API_PORT = os.getenv('API_PORT', 5001)

API_PORT = config('API_PORT', default=5001)
API_ENDPOINT = f'http://api:{API_PORT}/tests/add'
HEADERS = {'Content-Type': "application/json", 'Accept': "*/*"}

try: 
    tester = SpeedTester()
    result = tester.test()
    r = requests.post(url=API_ENDPOINT, json=result , headers=HEADERS)
except Exception as e:
    print(e)

    