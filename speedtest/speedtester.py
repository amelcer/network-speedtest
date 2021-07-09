import speedtest
from speedtest import ConfigRetrievalError 


def bitsToMbs(bits):
    return round(bits / 8 / 1000 / 100, 2)

try:    
    sp = speedtest.Speedtest()

    sp.download()
    sp.upload()
    results = sp.results.dict()



    test = {
        "download": bitsToMbs(results['download']),
        "upload": bitsToMbs(results['upload']),
        "server": results['server']['sponsor']
    }

    print(test)
except ConfigRetrievalError:
    print('config error')