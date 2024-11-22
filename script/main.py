from math import *
import panel as pn

pn.extension(sizing_mode="stretch_width")

slider = pn.widgets.FloatSlider(start=0, end=360, name='Amplitude')

def callback(new):
    return f'Cosinus: {cos((new*pi)/180)} & Sinus: {sin((new*pi)/180)}'


pn.Row(slider, pn.bind(callback, slider)).servable(target='simple_app')
