for index in range(4):
    basic.show_icon(IconNames.HEART)
    basic.pause(200)
    basic.show_icon(IconNames.SMALL_HEART)

def on_forever():
    pass
basic.forever(on_forever)
