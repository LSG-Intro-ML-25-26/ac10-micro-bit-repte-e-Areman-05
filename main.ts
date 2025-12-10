let x = 2
let y = 2
let modo = 0
function grafico_temp() {
    while (modo == 1) {
        led.plotBarGraph(input.temperature(), 50)
        basic.pause(500)
    }
}

function mover_gota() {
    let accX: number;
    let accY: number;
    
    while (modo == 2) {
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        if (accX <= -150 && x > 0) {
            x = x - 1
        } else if (accX >= 150 && x < 4) {
            x = x + 1
        }
        
        if (accY <= -150 && y > 0) {
            y = y - 1
        } else if (accY >= 150 && y < 4) {
            y = y + 1
        }
        
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    modo = 1
    grafico_temp()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    modo = 2
    mover_gota()
})
