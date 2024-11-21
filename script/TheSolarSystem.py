from math import *
from pyscript import display

import pygame

Largeur,Hauteur=1000,800

pygame.init()
fenetre = pygame.display.set_mode((Largeur,Hauteur))
pygame.display.set_caption("The Solar System")
font = pygame.font.Font('freesansbold.ttf', 20)
frequence = pygame.time.Clock()

base_x,base_y = Largeur//2,Hauteur//2

'''
soleil=pygame.image.load('')
mercure=pygame.image.load('')
venus=pygame.image.load('')
terre=pygame.image.load('')
mars=pygame.image.load('')
ceres=pygame.image.load('')

class BuildAstroObj:
    "Build a celeste object"
    def __init__(self, data=[]):
        self.name = data[0]
        self.period = data[1]
        self.distance = data[2]
        self.barycentre = data[3]
    
    def draw_obj(self, color=(255,255,255)):
        


'''

class BuildObjects:
    def __init__(self, name, heigh, periode, distance, depend):
        self.name = name
        self.x = 0
        self.y = 0
        self.heigh = heigh
        self.periode = periode
        self.distance = distance
        self.depend = depend
    
    def move(self, it, dif=0):
        (dx,dy)=self.depend        
        self.x = cos((it*(2*pi)+dif)/self.periode)*self.distance+dx
        self.y = sin((it*(2*pi)+dif)/self.periode)*self.distance+dy
    
    def draw_planet(self, color=(255,255,255)):
        pygame.draw.circle(fenetre, color, (self.x,self.y), self.heigh)
    
    def show_orbit(self, color=(153,153,153)):
        pygame.draw.circle(fenetre, color, self.depend, self.distance, 1)

    def show_name(self, color=(255,255,255)):
        self.name_txt = font.render(str(self.name), True, color)
        fenetre.blit(self.name_txt,(self.x+20,self.y+20))
         
        
# Réelles data 
'''
#   [Name, Heigh(km), Periode(h), distance(km), (Barycentre)]
Sun=['Soleil', 149597870, 1, 0, (base_x, base_y)]
Mer=['Mercure', 2439, 2111, 57909050, (Sun[])]
'''

Star1=BuildObjects('Star', 26, 1, 0, (base_x, base_y))
Star1.x = base_x; Star1.y = base_y
Planet=BuildObjects('Gaia', 6, 365.24, 352, (base_x,base_y))
Moon=BuildObjects('Moon', 2, 27, 23, (Planet.x,Planet.y))

Star1.draw_planet()


def displayObjects(o):
    
    Planet.draw_planet((0,0,0))
    Planet.move(o)
    Planet.draw_planet()
    
    Moon.depend=(Planet.x,Planet.y)
    Moon.draw_planet((0,0,0))
    Moon.move(o)
    Moon.draw_planet()

u=0
time=60

Pause = False
loop=True

display(fenetre)
while loop==True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            loop = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                if Pause: Pause = False
                else: Pause = True
            elif event.key == pygame.K_DOWN and time > 0: time-=1
            elif event.key == pygame.K_UP: time+=1
            elif event.key == pygame.K_LEFT: time=120
            elif event.key == pygame.K_RIGHT: time=0
            FPS = font.render(f'FPS: {time}', True, (255,255,255))
            pygame.draw.rect(fenetre, (0,0,0), [Largeur-80, 0, 80, 20],0)
            fenetre.blit(FPS,(Largeur-80,0))
    displayObjects(u)
    if Pause == False:
        u+=1
    frequence.tick(time)
    pygame.display.update()
pygame.quit()
