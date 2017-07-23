---
title: "Bootstraped VirtualEnvs"
date: 2016-05-17 12:07:56
path: "/blog/bootstraped-virtualenvs/"
tag: python
description: Las aplicaciones en Python usualmente hacen uso de paquetes y módulos que no forman parte de la librería estándar y a su vez estas hacen uso de versiones muy especificas de cada librería.
---

Las aplicaciones en Python usualmente hacen uso de paquetes y módulos que no forman parte de la librería estándar y a su vez estas hacen uso de versiones muy especificas de cada librería. Una instalación común de python, quizás no de abasto para que pueda cumplir con los requerimientos de las aplicaciones que tengas en tu sistema de desarrollo.

#### Primero, ¿Que son los entornos virtuales?

Un ejemplo muy basico:

_Si la aplicación A necesita la versión 1.0 de un módulo particular y la aplicación B necesita la versión 2.0, entonces los requerimientos entran en conflicto e instalar la versión 1.0 o 2.0 dejará una de las aplicaciones sin funcionar._

Para evitar todo este problema, existen los entornos virtuales (comunmente abreviado como “virtualenv”) que no es nada mas que un directorio que contiene una instalación de Python de una versión en particular, además de unos cuantos paquetes adicionales y donde adicionalmente estarán alojadas las librerias que necesitemos usar para nuestro proyecto.

#### Segundo, ¿Y que es virtualenvwrapper?
**virtualenv** es un poco deficiente, sin embargo, con **virtualenvwrapper** podemos gestionar los entornos virtuales y de recordar dónde se encuentra la dirección de activación de cada uno. **virtualenvwrapper** es un conjunto bien pensado de funciónes Shell para **virtualenv** que hacen la vida y usarlo mucho mejor.

#### Y ahora, manos a la obra
**virtualenvwrapper** contiene una suite de scripts (Hooks), que podemos modificar según nuestras necesidades, ahorita usaremos dos que son muy útiles:

##### postmkvirtualenv
Se activa despues de cualquier invocación de **mkvirtualenv** así que vamos a hacer que cuando intentemos crear un nuevo entorno virtual cree un nuevo directorio llamado igual que el nombre del entorno si este no existe o si no que simplemente acceda a este.

{% highlight bash %}
parent="$PWD"
envname="$(basename $VIRTUAL_ENV)"
envdir="$parent/$envname"
if [ ! -e $envdir ]; then
mkdir -p $envdir
fi
cd $envdir
{% endhighlight %}


##### postactivate
Su activación se da cada vez que utilizamos **workon** o bien necesitamos activar nuestro entorno virtual, lo que vamos a hacer es que cada vez que intentemos activar un entorno nos lleve directamente a la carpeta que lo contiene.

{% highlight bash %}
postactivate=$VIRTUAL_ENV/bin/postactivate
echo "cd $envdir" >> $postactivate
{% endhighlight %}


#### Para finalizar
Ahora ya no tenemos que preocuparnos por donde esta cada proyecto, solo necesitamos saber como se llama el entorno ( usualmente igual que el proyecto ) y escribir *workon env_name* y así de fácil estaremos en el lugar correcto. Si te olvidas del nombre de tu entorno recuerda que puedes usar *lsvirtualenv* para ayudarte a recordar.
