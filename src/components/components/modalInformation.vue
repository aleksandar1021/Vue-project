<template>
    <div id="modal">
        <div id="row">
            <h3 id="name">Information</h3>
            <div @click="close" id="iks">
                x
            </div>
        </div>

        <div v-if="message" id="modal-content" v-html="message"></div>
        <div v-else id="modal-content">
            <img class="image" :src="image" :alt="image">
        </div>
        
    </div>
</template>

<script>
    export default{
        name : "modalInformation",
        props : {
            message : {
                type : String
            },
            image : {
                type : String
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
        justify-content: center;
        padding: 50px 30px;
        font-size: 18px;
    }
    #name{
        margin-top: 10px;
        margin-left: 10px;
    }
    .image{
        width: 400px !important;
        background-size: cover;
        height: 400px !important;
        margin-block: -50px;
    }
    
</style>

<style>
    #nameInformation{
		color: red !important;
	}
</style>