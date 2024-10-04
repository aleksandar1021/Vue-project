<template>
        <div class="form-group col-12">
            <label v-if="label" :for="id">{{label}}</label>
            <textarea v-if="rows" v-model="localValue" :id="id" :rows="rows" :placeholder="placeholder"></textarea>
            <input v-else-if="!disabeld" v-model="localValue" :type="type" class="form-control tbtn" :id="id" aria-describedby="emailHelp" :placeholder="placeholder"/>
            <input v-else disabled v-model="localValue" :type="type" class="form-control tbtn" :id="id" aria-describedby="emailHelp" :placeholder="placeholder"/>
            <small v-if="hint" id="emailHelp" class="form-text text-muted">{{hint}}</small>
        </div>
</template>
<script>
    export default{
        name : "TextComponent",
        props : {
            label : {
                type : String,
                required : false
            },
            hint : {
                type : String,
                required : false
            },
            id : {
                type : String,
                required : true
            },
            value : {
                type : String
            },
            type : {
                type : String,
                required : false,
                default : "text"
            },
            placeholder : {
                type : String,
                required : false
            },
            rows:{
                type : String
            },
            disabeld : {
                type : Boolean,
                required : false,
                default : false
            }
        },
        data(){
            return{
                localValue : "",
            }
        },
        mounted(){
            this.localValue = this.value
        },
        watch : {
            localValue : function(){
                this.$emit("input", this.localValue)
            },
            value : function(){
                this.localValue = this.value
            }
        }
    }
</script>

<style>
    .tbtn{
        border-radius: 0px !important;
        border: 1px solid rgb(87, 87, 87) !important;
    }
</style>