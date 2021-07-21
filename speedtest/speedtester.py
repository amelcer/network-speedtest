import speedtest
from datetime import datetime, timezone
from speedtest import ConfigRetrievalError 


class SpeedTester:

    def __init__(self) -> None:
        pass

    def test(self):
        try:    
            sp = speedtest.Speedtest()

            sp.download()
            sp.upload()
            results = sp.results.dict()

            test = {
                "down": self.bitsToMbs(results['download']),
                "up": self.bitsToMbs(results['upload']),
                "server": results['server']['sponsor'],
                "date": datetime.now(timezone.utc).isoformat()
            }

            print(test)
        except ConfigRetrievalError:
            print('config error')


    def bitsToMbs(self, bits):
        return round(bits / 8 / 1000 / 100, 2)