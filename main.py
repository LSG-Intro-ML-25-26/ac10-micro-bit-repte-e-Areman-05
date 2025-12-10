x = 2
y = 2
modo = 0

def grafico_temp():
    while modo == 1:
        led.plot_bar_graph(input.temperature(), 50)
        basic.pause(500)

def mover_gota():
    global x, y
    while modo == 2:
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)

        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)

        if accX <= -150 and x > 0:
            x = x - 1
        elif accX >= 150 and x < 4:
            x = x + 1

        if accY <= -150 and y > 0:
            y = y - 1
        elif accY >= 150 and y < 4:
            y = y + 1

def on_button_pressed_a():
    global modo
    modo = 1
    grafico_temp()

def on_button_pressed_b():
    global modo
    modo = 2
    mover_gota()

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
