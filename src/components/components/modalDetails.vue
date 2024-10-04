<template>
    <div id="modal">
        <div id="row">
            <h2 id="name">{{ meal[0][name] }}</h2>
            <div @click="close" id="iks">
                x
            </div>
        </div>

        <div id="modal-content">
            <div id="image">
                <img class="image" :src="meal[0][image]"/>
            </div>
            <div id="details">
                <h3>Name:</h3>
                <p>{{ meal[0][name] }}</p>
                <h3>Category Of Meal:</h3>
                <p>{{ meal[0][category] }}</p>
                <h3>The meal comes from the area</h3>
                <p>{{ meal[0][area] }}</p>
                <h3>Components:</h3>
                <div v-for="index in 20" :key="index">
                    <li type="square" v-if="meal[0][`strIngredient${index}`]">{{ meal[0][`strIngredient${index}`] }} - {{ meal[0][`strMeasure${index}`] }}</li>
                </div>
                <h3>Way of preparation:</h3>
                <p>{{ meal[0][instruction] }}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        name : "modalDetails",
        props : {
            meal : {
                type : Array,
                required : true
            }, 
            name : {
                type : String,
                required : true
            },
            image : {
                type : String,
                required : true
            },
            category : {
                type : String,
                required : true
            },
            area : {
                type : String,
                required : true
            },
            instruction : {
                type : String,
                required : true 
            }

        },
        methods : {
            close(){
                let modal = document.getElementById("modal")
                modal.classList.remove("block")
            }
        }
    }
</script>

<style scoped>
    #modal{
        position: fixed !important;
        width: 60% !important;
        height: fit-content !important;
        background-color: rgb(255, 255, 255);
        z-index: 100;
        left: 20%;
        top: 20%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        display: none;
         
    }
    #row{
        width: 100%;
        background: rgb(220, 220, 220);
        height: 50px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    #iks{
        width: 70px;
        height: 100%;
        background: red;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        cursor: pointer;
    }
    .block{
        display: block !important;

    }
    #modal-content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #image{
        width: 50%;
        height: 100%;
    }
    #image img{
        width: 100%;
        height: 100%;
    }
    #name{
        font-weight: 600;
        margin-left: 10px;
        margin-top: 10px;
    }
    #details{
        width: 50% !important;
        padding: 20px;
        overflow-y: auto !important;
        max-height: 450px !important;
    }
    h3{
        margin-bottom: 10px;
    }
    .image{
        width: 100% !important;
    }
</style>