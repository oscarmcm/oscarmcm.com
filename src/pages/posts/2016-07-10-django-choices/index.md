---
title: "Django Choices mejores practicas"
date: 2016-07-10 12:07:56
path: "/blog/django-choices/"
tag: django
description: Un modelo es la única fuente y definitiva de datos sobre los datos. Contiene los campos esenciales y comportamientos de la información que este almacena.
---

Un modelo es la única fuente y definitiva de datos sobre los datos. Contiene los campos esenciales y comportamientos de la información que este almacena.

Una gran cantidad de casos de uso común implica un campo en modelo que necesita aceptar los valores de un conjunto limitado de opciones; por ejemplo, un campo para la selección de un departamento de Nicaragua debería, y lógicamente, sólo de permitir los valores que corresponden a los departamentos reales de Nicaragua.

En el ORM de Django, esto se representa mediante el argumento de “opciones” al definir el campo, y por lo general esto proporciona una solución bastante fácil.

Choices

Los choices son un objeto del tipo iterable; por ejemplo, una lista o tupla, de la siguiente manera:

STATUS_CHOICES = (
    (1, 'Publico'),
    (2, 'Edicion'),
    (3, 'Oculto'),
)
El primer elemento de cada tupla es el valor real que se va fijado en el modelo, y el segundo elemento es el nombre legible por humanos.

Una solución no muy viable

En el ejemplo anterior, para definir el valor real de nuestro objeto a guardar usamos números enteros.

En general, un “número mágico” es cualquier constante numérica (o cualquier otra cosa de valor-sentido) que se cita literalmente en el código. En este caso, estamos utilizando el valor “Publico” de estado - 1 - al menos en dos lugares:

Una vez en la declaración del modelo de campo (para proporcionar un valor por defecto).
Incluso si escribimos un gestor personalizado para regresar entradas publicas, al menos una vez más con el fin de filtrar el estado = 1.
Esto es problemático por varias razones; en primer lugar, que viola el principio ”DRY”, al requerir que repita el mismo valor entero en múltiples lugares. También corre el riesgo de violar el principio estrechamente relacionado “Once and Only Once”, porque es fácil caer en la trampa de filtro de escritura (estado = 1) en más de un lugar. Por último, se crea un dolor de cabeza en el mantenimiento: se necesita realizar un seguimiento de lo que el valor “mágico” es, como una lista de cada lugar en que se usa (ya que cualquier cambio futuro debe suceder en todos esos lugares a la vez).

Un enfoque diferente

¿Cómo podemos hacer referencia a este valor sin la dura codificación del “número mágico” por todo el código?

En lenguajes con tipos enumerados (por ejemplo, enum en C y sus parientes), este es un problema bastante fácil de resolver; en uno de esos idiomas pudiéramos declarar una enumeración con los nombres de las diferentes opciones, y dejar que el lenguaje maneje los valores subyacentes.

Lo que podemos hacer es definir una serie de constantes:

LIVE_STATUS = 1
DRAFT_STATUS = 2
HIDDEN_STATUS = 3
Y ahora referenciamos sus respectivos valores en nuestros choice

STATUS_CHOICES = (
    (LIVE_STATUS, 'Publico'),
    (DRAFT_STATUS, 'Edicion'),
    (HIDDEN_STATUS, 'Oculto'),
)
Esto limpia significativamente nuestro código, de dos maneras:

Ya no tenemos “números mágicos” por ahí, que necesitan ser actualizados por separado; un único cambio en la definición de una de las constantes es todo lo que se necesita para llevar el código hasta la fecha (la base de datos es otro asunto, pero se puede solucionar con una sola consulta UPDATE).
El código es ahora mucho más claro: una consulta de estado = 1 podría significar cualquier cosa, pero una consulta de estado = LIVE_STATUS es mucho mas explicita.
Encapsulacion

Sin embargo hay un cambio más, que podría hacer esto aún mejor: encapsular las opciones de estado en el interior del modelo.

Estas opciones lógicamente “pertenecen” al modelo, después de todo, por lo que no debería ser necesario definir por separado o importar de forma separada al modelo en sí. Así que mueve las constantes, y las opciones de la tupla, dentro de la clase:

class Entry(models.Model):
    LIVE_STATUS = 1
    DRAFT_STATUS = 2
    HIDDEN_STATUS = 3
    STATUS_CHOICES = (
        (LIVE_STATUS, ‘Publico’),
        (DRAFT_STATUS, ‘Edicion’),
        (HIDDEN_STATUS, ‘Oculto’),
    )
    # …algunos campos mas…
    status = models.IntegerField(choices=STATUS_CHOICES, default=LIVE_STATUS)
Ahora podemos importar el modelo y consultarlo de este modo:

from app_name.models import Entry

live_entries = Entry.objects.filter(status=Entry.LIVE_STATUS)
