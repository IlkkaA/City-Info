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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        wth_url = "http://api.openweathermap.org/data/2.5/weather?lang=en&lat=" + lat + "&lon=" + lon + "&units=metric&APPID=8389bbb8e8ceb81a03bea17536b8dd06";
         
        console.log(wth_url);
        
        $.ajax({
            url: wth_url
        })
        .done(function(wth_data) {
            
            wth_icon_url = "http://openweathermap.org/img/w/";
            //console.log(wth_data);
            wth_icon = wth_data.weather[0].icon;
            //console.log(wth_icon);
            wth_icon_url = wth_icon_url + wth_icon + ".png";
            console.log(wth_icon_url);
            
            $("#wth-img").attr("src", wth_icon_url);          
            $("#wth-desc").text(wth_data.weather[0].description);
            $("#wth-cels").text(Math.round(wth_data.main.temp) + " °C");
            $("#wth-wind").text("wind: " + wth_data.wind.speed + " m/s");
        });
        
    }, // device ready ends

}; // app ends

