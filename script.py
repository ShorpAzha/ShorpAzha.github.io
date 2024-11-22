import pygame
import random
import asyncio

# Initialize pygame
pygame.init()

# Constants
SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480
CIRCLE_RADIUS = 15
SPEED = 5

# Colors
RED = (255, 0, 0)
COLORS = [(255, 255, 255), (0, 255, 0), (0, 0, 255), (255, 255, 0), (255, 0, 255), (0, 255, 255)]

# Global variables
circle_x = random.randint(CIRCLE_RADIUS, SCREEN_WIDTH - CIRCLE_RADIUS)
circle_y = random.randint(CIRCLE_RADIUS, SCREEN_HEIGHT - CIRCLE_RADIUS)
circle_dx = SPEED
circle_dy = 0
circle_color = RED
running = True

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Click the Circle")
clock = pygame.time.Clock()

async def main():
    global circle_x, circle_y, circle_dx, circle_dy, circle_color, running

    while running:
        screen.fill((0, 0, 0))

        # Draw the circle
        pygame.draw.circle(screen, circle_color, (circle_x, circle_y), CIRCLE_RADIUS)

        # Move the circle
        circle_x += circle_dx
        circle_y += circle_dy

        # Check for wall collision
        if circle_x - CIRCLE_RADIUS <= 0 or circle_x + CIRCLE_RADIUS >= SCREEN_WIDTH:
            circle_dx = -circle_dx

        # Check for events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.MOUSEBUTTONDOWN:
                mouse_x, mouse_y = pygame.mouse.get_pos()
                distance = ((mouse_x - circle_x) ** 2 + (mouse_y - circle_y) ** 2) ** 0.5
                if distance <= CIRCLE_RADIUS:
                    circle_dx = -circle_dx
                    circle_color = random.choice([c for c in COLORS if c != circle_color])

        pygame.display.flip()
        await asyncio.sleep(0)  # Let other tasks run

# This is the program entry point
asyncio.run(main())
