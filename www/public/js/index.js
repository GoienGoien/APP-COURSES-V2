/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

// FUNCION PARA CARGAR UNA VISTA PARCIAL
function loadPartialView(viewName, divClass = null) {
    $.ajax({
        url: 'Views/' + viewName + '.html',
        method: 'GET',
        success: function(data) {
            $(divClass).html(data);
        },
        error: function(xhr, status, error){
            console.error('Error al cargar la vista parcial:'. error);
        }
    });
}

function appendElementOnOwl(elementName, container) {
    route = 'Views/Elements/' + elementName + '.html';
    itemCount = container.find('owl-stage').children().length;
    $.get(route, function (data) {
        container.trigger('add.owl.carousel', [data, itemCount]);
        container.trigger("refresh.owl.carousel");
    });
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
function saveLocalStorageValue(name, value) {
    // Para almacenar utilizaremos el método "setItem"
    // pasándole como parámetros la clave y el valor a almacenar:
    window.localStorage.setItem(name, value);
    return console.log(name + " guardado exitosamente.")
}

function getLocalStorageValue(name) {
    //Para recuperar un valor utilizamos el método "getItem"
    //pasándole como parámetro la clave del valor deseado:
    return window.localStorage.getItem(name);
}

function removeLocalStorageValue(name) {
    // Y para borrar el método removeItem y la clave:
    window.localStorage.removeItem(name);
    return console.log(name + " eliminado exitosamente.")
}

// FUNCION PARA CARGAR UNA VISTA PARCIAL CON DURACIÓN DE 3 SEGUNDOS
function loadPartialViewWithDelay(viewName, divClass = null) {
    $.ajax({
        url: 'Views/' + viewName + '.html',
        method: 'GET',
        success: function(data) {
            $(divClass).html(data);

            // Establecer un retraso de 3 segundos antes de limpiar la vista parcial
            setTimeout(function() {
                $(divClass).html(''); // Limpiar la vista parcial después de 3 segundos
            }, 5000);
        },
        error: function(xhr, status, error){
            console.error('Error al cargar la vista parcial:', error);
        }
    });
}

function togglePassword() {
    var x = document.getElementById("user-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  $(document).ready(function() {
    $('#signup').on('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace
        loadPartialView('signup', document.querySelector('.page'))
    });
});
$(document).ready(function() {
    $('#loginlink').on('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace
        loadPartialView('login', document.querySelector('.page'))
    });
  });
function ToPrincipal(){
    loadPartialView('Modules/Main_structure', document.querySelector('.mainstructure'))
    loadPartialView('home', document.querySelector('.page'))
    document.getElementsByClassName("page")[0].style.marginBottom = "110px";
}

function removePlaceholderClass() {
    var glowelements = document.querySelectorAll('.placeholder-glow');
    var elements = document.querySelectorAll('.placeholder');
    elements.forEach(function(element) {
        element.classList.remove('placeholder');
    });
    glowelements.forEach(function(element) {
        element.classList.remove('placeholder-glow');
    });
}

