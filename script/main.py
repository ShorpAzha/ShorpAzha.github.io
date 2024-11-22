from math import cos, sin, pi
import panel as pn

from bokeh.plotting import figure

p1 = figure(height=200, sizing_mode='stretch_width')
p2 = figure(height=200, sizing_mode='stretch_width')

p1.line([1, 2, 3], [1, 2, 3])
p2.circle([1, 2, 3], [1, 2, 3])

pn.extension(sizing_mode="stretch_width")

slider = pn.widgets.FloatSlider(start=0, end=360, name='Amplitude')

def callback(new):
    return f'Cosinus: {cos((new*pi)/180)} & Sinus: {sin((new*pi)/180)}'


pn.Row(slider, pn.bind(callback, slider)).servable(target='simple_app')
pn.Row(p1, p2)
