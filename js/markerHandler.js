AFRAME.registerComponent("#markerHandler",{
    init : async function(){
        this.el.addEventListener("markerFound",() => {
            console.log("marker is found")
            this.handleMarkerFound();
            });
            this.el.addEventListener("markerLost",() => {
                console.log("marker is lost")
                this.handleMarkerLost();
            });
            
            },
            handleMarkerFound: function(){
                var buttonDiv = document.getElementById("button-div");
                buttonDiv.style.display="flex";

                var ratingButton = document.getElementById("rating-button");
                var orderButton = document.getElementById("order-button");
                ratingButton.addEventListener("click",() =>{
                    swal({
                        icon:"warinng",
                        title:"rate-dish",
                        text:"work in progress"

                    });
                });
                //handing click event
                orderButton.addEventListener("click",() => {
                swal({
                    icon:"https://i.imgur.com/4NZ6uLY.jpg",
                    title:"Thanks for Order!",
                    text: "YOUR ORDER WILL BE SERVED SOON AT YOUR TABLE!"
                });
                    
                });
            },
            handleMarkerLost: function(){
                var buttonDiv = document.getElementById("button-div");
                buttonDiv.style.display = "none";
            }
        });
    