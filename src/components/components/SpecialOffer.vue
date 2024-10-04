<template>
    <div class="container container2 ">
        <h2 class="tittle">Our offer for you</h2>
        <div class="best-grids coll">
            <div class="col-md-6 best-grid1">
                <img :src="meal[image]" class="randomImage" alt=""/>
            </div>
            <div class="col-md-6 best-grid container3">
                <h4 class="hedding1 hedding">Something from our offer </h4>
                <br/>
                <h4 class="hedding">Name of meal:</h4>
                <p class="values">{{ meal[name] }}</p>

                <h4 class="hedding">Category of meal:</h4>
                <p class="values">{{ meal[category] }}</p>

                <h4 class="hedding">The meal comes from the area:</h4>
                <p class="values">{{ meal[area] }}</p>
            </div>
        </div>
	</div>
</template>

<script>
    export default{
        name : "specialOffer",
        props : {
            meal : {
                type : Object,
                required : true
            },
            image : {
                type : String
            },
            name : {
                type : String
            },
            category : {
                type : String
            },
            area : {
                type : String
            }
        }
    }
</script>