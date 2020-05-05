#https://www.ti.com/lit/ds/symlink/lm35.pdf
#3 pina: +, - i output

#Biblioteke
import time, random, web, json

def temperatura():
    return "{:.2f}".format(random.random()*51)

urls = (
    '/','index', #imacemo / tj index stranicu koju cemo obradjivati putem index metode tj klase koju cemo napraviti dole
    '/temperatura', 'temp' #imacemo /temperatura stranicu koju cemo obradjivati putem temp metode tj klase koju cemo napraviti dole
)

class index:
    def GET(self):
        #sledece dve komande nam trebaju da bi radili na lokalu
        web.header('Access-Control-Allow-Origin',      '*') 
        web.header('Access-Control-Allow-Credentials', 'true')

        return "Otvori link localhost:8080/temperatura"

class temp:        
    def GET(self):
        web.header('Access-Control-Allow-Origin',      '*')
        web.header('Access-Control-Allow-Credentials', 'true')
        data = {'temperatura':temperatura()}
        return json.dumps(data)

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()

