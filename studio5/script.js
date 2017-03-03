// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
            console.log("DOM fully loaded and parsed");

            function allowDrop(event) {
                event.preventDefault();
            }

            function drag(event, "garment1") {
                var garment1 = document.getElementById("garment1");
                event.dataTransfer.setData("osaicon", img1.id);
                img1.style.opacity = 0;
            }

            function drop(event) {
                var data = event.dataTransfer.getData("osaicon");
                console.log(event.target.nodeName)
                if (event.target.nodeName !== "IMG") {
                    event.target.appendChild(document.getElementById(data));
                }
            }

            function show("doll") {
                var doll = document.getElementById("doll");
                img1.style.opacity = 1;
            }
