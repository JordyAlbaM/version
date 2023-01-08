import pygame

# constants
CELL_SIZE = 20
GRID_WIDTH = 20
GRID_HEIGHT = 15

# initialize pygame
pygame.init()

# set the window size
screen = pygame.display.set_mode((CELL_SIZE * GRID_WIDTH, CELL_SIZE * GRID_HEIGHT))

# set the window title
pygame.display.set_caption('Snake')

# state
snake = [(10, 10)] # initial position of the snake
direction = (1, 0) # initial direction of the snake (right)
apple = (15, 15) # position of the apple

# main game loop
running = True
while running:
      # check for events
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running = False
    if event.type == pygame.KEYDOWN:
      if event.key == pygame.K_UP:
        direction = (0, -1)
      elif event.key == pygame.K_DOWN:
        direction = (0, 1)
      elif event.key == pygame.K_LEFT:
        direction = (-1, 0)
      elif event.key == pygame.K_RIGHT:
        direction = (1, 0)

  # move the snake
  if len(snake) > 1: # only remove the last cell if there's more than one
    snake.pop() # remove the last cell of the snake

  # update the snake's position
  x, y = snake[0]
  x += direction[0]
  y += direction[1]
  snake.insert(0, (x, y)) # insert the new position at the beginning of the list


  # move the snake
  
